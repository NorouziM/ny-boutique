import React from "react";
import NYCard from "./NYCard";
import { connect } from "react-redux";

export const Directory = ({ menu_items }) => {
  return (
    <div className="flex flex-col flex-shrink-0 md:grid md:grid-cols-12 gap-2 w-full mt-32 h-64 px-8">
      {menu_items.map((menu_item) => {
        const { size, title, imageUrl, id, linkUrl } = menu_item;
        return (
          <NYCard
            key={id}
            size={size}
            title={title}
            imageUrl={imageUrl}
            linkUrl={linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  menu_items: state.directory.sections,
});

export default connect(mapStateToProps)(Directory);
