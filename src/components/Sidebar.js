import { Menu } from "antd";

const stringContains = (string1, string2) =>
  string1.toLowerCase().includes(string2.toLowerCase());

const filterItemsBySearch = (search) => (item) => {
  if (!search) return true;

  return (
    stringContains(item.name, search) ||
    stringContains(item.id, search) ||
    stringContains(item.group, search)
  );
};

const mapToMenuItems = (items, search) => (group) => ({
  key: group.id,
  label: group.name,
  title: group.name,
  children: items
    .filter((item) => item.group === group.id)
    .filter(filterItemsBySearch(search))
    .map((item) => ({
      key: item.id,
      label: item.name,
      title: item.name,
    })),
});

const Sidebar = ({ groups, items, search }) => {
  const menuItems = groups
    .map(mapToMenuItems(items, search))
    .filter((menuItem) => menuItem.children.length);

  return <Menu mode="inline" items={menuItems} search={search} />;
};

export default Sidebar;
