export type Weather = {
  current: {
    temp: number;
    clouds: number;
    weather: [
      conditions: {
        main: string;
        icon: string;
      }
    ];
  };
  daily: [
    date: {
      dt: number;
      clouds: number;
      temp: {
        min: number;
        max: number;
      };
      weather: [
        conditions: {
          id: number;
          icon: string;
        }
      ];
    }
  ];
  timezone: string;
};
