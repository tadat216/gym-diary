// This file is required for Expo/React Native SQLite migrations - https://orm.drizzle.team/quick-sqlite/expo

import journal from './meta/_journal.json';
import m0000 from './0000_good_squadron_sinister.sql';
import m0001 from './0001_overconfident_madelyne_pryor.sql';
import m0002 from './0002_green_ultragirl.sql';

  export default {
    journal,
    migrations: {
      m0000,
m0001,
m0002
    }
  }
  