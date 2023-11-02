import { useSelector, useDispatch } from 'react-redux';
import { navigate } from './navigation.store';
import { MenuItem } from '../shared/menu-item';

export function NavList() {
  const activeRoute = useSelector((state) => state.navigation.active);
  const dispatch = useDispatch();

  const navigation = {
    children: [
      {
        label: "Home",
        value: 'home',
      },
      {
        label: "Public",
        children: [
          { label: "Questions", value: "questions" },
          { label: "Tags", value: "tags" },
          { label: "Companies", value: "companies" }
        ]
      },
      {
        label: "Collectives",
        children: [{ label: "Explore Collectives", value: "explore-collectives" }]
      },
      {
        label: "Labs",
        children: [{ label: "Discussions", value: 'discussions' }]
      }
    ]
  };

  return (
    <div className="nav-list">
      <MenuItem item={navigation} level={0} selected={activeRoute} clickHandler={({ value }) => dispatch(navigate(value))}/>
    </div>
  );
}