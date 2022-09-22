import React from "react";

const Sidebar = ({ items }: { items: { name: string; href: string }[] }) => (
  <div>
    {items.map((item) => (
      <div key={item.href}>
        <a href={item.href} role="navigation">
          {item.name}
        </a>
      </div>
    ))}
  </div>
);

export default Sidebar;
