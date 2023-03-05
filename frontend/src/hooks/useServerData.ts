import { useState } from 'react';

export interface UseServerDataReturnType {
  serverData: Array<multiServiceStatus> | [];
  setServerStatus: (services: Array<multiServiceStatus>) => void;
  resetServerData: () => void;
}

const useServerData = () => {
  const [serverData, setServerData] = useState<multiServiceStatus[]>([]);

  const setServerStatus = (services: Array<multiServiceStatus>) => {
    setServerData(services);
  };

  const resetServerData = () => {
    setServerData([]);
  };

  return { serverData, setServerStatus, resetServerData };
};

export default useServerData;
