import { Input } from "antd";

const SidebarSearch = ({ search, onSearch }) => {
  const handleChange = (event) => {
    onSearch(event.target.value ?? null);
  };

  return (
    <div
      style={{
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <Input value={search} onChange={handleChange} allowClear />
    </div>
  );
};

export default SidebarSearch;
