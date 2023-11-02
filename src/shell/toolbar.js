import { GlobalSearch } from '../shared/global-search';

export function Toolbar() {
  return (
    <div className="d-flex d-row toolbar">
      <div>stackoverflow</div>
      <GlobalSearch />
    </div>
  );
}