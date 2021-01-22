import React from 'react';
import { RouteProps as ReactRouterProps } from 'react-router-dom';

export interface RouteProps extends ReactRouterProps {
  component: React.ComponentType
}