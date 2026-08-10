import { GlobalRegistrator } from '@happy-dom/global-registrator';

// Nothing in src/ runs without window/document/localStorage. Registered once
// per test process via bunfig.toml preload.
GlobalRegistrator.register();
