import { createContext } from 'react';

import { UseServerDataReturnType } from 'hooks/useServerData';

export const ServerContext = createContext<UseServerDataReturnType | null>(
  null,
);
