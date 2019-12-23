import * as React from 'react';
import { useStateValue } from '../../../Redux';

export function WinnerPage() {
  const [{ users }, dispatch] = useStateValue();
  return <div>hi</div>;
}
