import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lockaway.test',
  appName: 'ionic-app-base',
  webDir: 'dist',
  bundledWebRuntime: false,
  plugins: {
    LocalNotifications: {
      smallIcon:"ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",  
    },
  },
};

export default config;
