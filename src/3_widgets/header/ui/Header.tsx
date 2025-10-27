import React, { useState } from "react";
import { Layout, Menu, AutoComplete, Input } from "antd";
import type { AutoCompleteProps } from "antd";

const { Header: Hd } = Layout;

const getRandomInt = (max: number, min = 0) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query: string) =>
    Array.from({ length: getRandomInt(5) }).map((_, idx) => {
        const category = `${query}${idx}`;
        return {
            value: category,
            label: (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
          <span>
            Found {query} on{" "}
              <a
                  href={`https://s.taobao.com/search?q=${query}`}
                  target="_blank"
                  rel="noopener noreferrer"
              >
              {category}
            </a>
          </span>
                    <span>{getRandomInt(200, 100)} results</span>
                </div>
            ),
        };
    });

export const Header = () => {
    const items = [
        { key: "1", label: "Home" },
        { key: "2", label: "List" },
        { key: "3", label: "Log in" },
    ];

    const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

    const handleSearch = (value: string) => {
        setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value: string) => {
        console.log("onSelect", value);
    };

    return (
        <div>
            {/* HeaderHomePage */}
            <Hd style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
                <AutoComplete
                    popupMatchSelectWidth={252}
                    style={{ width: 300 }}
                    options={options}
                    onSelect={onSelect}
                    onSearch={handleSearch}
                >
                    <Input.Search size="large" placeholder="Search here" enterButton />
                </AutoComplete>
            </Hd>
        </div>
    );
};
