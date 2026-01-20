export interface DailyChallenge {
  id: string;
  title: string;
  description: string;
  type: 'survive' | 'dodge' | | 'score' | 'streak' | 'distance';
  target: number;
  reward: number; // Bonus points
  icon: string;
  completed: boolean;
  progress: number;
  expiresAt: Date;
}

export class DailyChallengeSystem {
  private _challenges: DailyChallenge[] = [];
  private _lastGenerated: string = ''; // Date string for last generation

  private _challengeTemplates: Omit<DailyChallenge, 'id' | 'progress' | 'completed' | 'expiresAt'>[] = [
    {
      title: 'Survivor',
      description: 'Survive for 60 seconds',
      type: 'survive',
      target: 60,
      reward: 50,
      icon: '⏱️'
    },
    {
      title: 'Dodge Master',
      description: 'Dodge 30 obstacles',
      type: 'dodge',
      target: 30,
      reward: 75,
      icon: '🏃'
    },
    {
      title: 'High Scorer',
      description: 'Reach a score of 200',
      type: 'score',
      target: 200,
      reward: 100,
      icon: '🎯'
    },
    {
      title: 'On Fire',
      description: 'Get a streak of 5 runs without dying',
      type: 'streak',
      target: 5,
      reward: 150,
      icon: '🔥'
    },
    {
      title: 'Marathon',
      description: 'Travel 1000 units distance',
      type: 'distance',
      target: 1000,
      reward: 60,
      icon: '🏃‍♂️'
    },
    {
      title: 'Quick Runner',
      description: 'Survive for 45 seconds',
      type: 'survive',
      target: 45,
      reward: 40,
      icon: '⚡'
    },
    {
      title: 'Clean Run',
      description: 'Dodge 20 obstacles without getting hit',
      type: 'dodge',
      target: 20,
      reward: 50,
      icon: '✨'
    },
    {
      title: 'Century',
      description: 'Reach a score of 150',
      type: 'score',
      target: 150,
      reward: 60,
      icon: '💯'
    }
  ];

  constructor() {
    this._loadFromStorage();
    this._generateIfNeeded();
  }

  private _getTodayString(): string {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  }

  private _loadFromStorage(): void {
    try {
      const saved = localStorage.getItem('toiletRunner_challenges');
      if (saved) {
        const data = JSON.parse(saved);
        this._challenges = data.challenges || [];
        this._lastGenerated = data.lastGenerated || '';
      }
    } catch (e) {
      console.log('No challenge data found');
    }
  }

  private _saveToStorage(): void {
    try {
      const data = {
        challenges: this._challenges,
        lastGenerated: this._lastGenerated
      };
      localStorage.setItem('toiletRunner_challenges', JSON.stringify(data));
    } catch (e) {
      console.log('Failed to save challenges');
    }
  }

  private _generateIfNeeded(): void {
    const today = this._getTodayString();

    if (this._lastGenerated !== today) {
      this._generateDailyChallenges();
      this._lastGenerated = today;
      this._saveToStorage();
    }
  }

  private _generateDailyChallenges(): void {
    // Select 3 random challenges
    const shuffled = [...this._challengeTemplates].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 3);

    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    this._challenges = selected.map((template, index) => ({
      ...template,
      id: `${this._getTodayString()}_${index}`,
      progress: 0,
      completed: false,
      expiresAt: tomorrow
    }));
  }

  getChallenges(): DailyChallenge[] {
    this._generateIfNeeded();
    return this._challenges;
  }

  getActiveChallenges(): DailyChallenge[] {
    return this._challenges.filter(c => !c.completed);
  }

  updateProgress(type: DailyChallenge['type'], value: number): void {
    for (const challenge of this._challenges) {
      if (challenge.completed || challenge.type !== type) continue;

      challenge.progress = Math.min(challenge.target, challenge.progress + value);

      if (challenge.progress >= challenge.target) {
        challenge.completed = true;
        this._saveToStorage();
      }
    }
  }

  getCompletedBonus(): number {
    return this._challenges
      .filter(c => c.completed)
      .reduce((sum, c) => sum + c.reward, 0);
  }

  resetExpiredChallenges(): void {
    const now = new Date();
    this._challenges = this._challenges.filter(c => new Date(c.expiresAt) > now);
    this._saveToStorage();
  }

  getTimeRemaining(): { hours: number; minutes: number; seconds: number } {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow.getTime() - now.getTime();

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000)
    };
  }
}
