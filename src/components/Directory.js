import React from "react";
import NYCard from "./NYCard";
import { menu_items } from "./DIrectory.data.js";
export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: menu_items, // data for menu items in homepage
    };
  }
  render() {
    return (
      <div className="flex flex-col flex-shrink-0 md:grid md:grid-cols-12 gap-2 w-full mt-14 h-64 px-8">
        {this.state.sections.map((menu_item) => {
          const { size, title, imageUrl } = menu_item;
          return <NYCard size={size} title={title} imageUrl={imageUrl} />;
        })}
      </div>
    );
  }
}
