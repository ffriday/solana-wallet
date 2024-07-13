import React from 'react';
import { KeyContext } from './KeyProvider';

export const useKey = () => React.useContext(KeyContext);