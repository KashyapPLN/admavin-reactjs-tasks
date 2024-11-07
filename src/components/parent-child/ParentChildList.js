import React, { useState } from "react";
import ParentChildData from './ParentChildData.json';
import './parentchild.css'
import { FaFolder } from "react-icons/fa";
import { Container } from "react-bootstrap";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
function ParentChildList(){
  const [expanded, setExpanded] = useState([]);
  const data= ParentChildData;

  const handleClick = (id) => {
    if (expanded.includes(id)) {
      setExpanded(expanded.filter((exp) => exp !== id));
    } else {
      setExpanded([...expanded, id]);
    }
  };

  function renderList(data, level = 0){
    return data.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      return (
        <Container>
        <div className="parentChild">
        <li key={item.id}>
          <div style={{display:'flex','flexDirection':'row',alignItems:'center'}}
            className={`item level-${level} ${
              expanded.includes(item.id) ? "expanded" : ""
            }`}
            onClick={() => handleClick(item.id)}
          >
           <span className="me-2 mb-2" style={{color:"#1b84bd",fontSize:'20px'}}><FaFolder /></span> {item.name}
            {hasChildren && (
              <span className="arrow ms-2">
                {expanded.includes(item.id) ? <FiMinusCircle /> : <FiPlusCircle />}
              </span>
            )}
          </div>
          {hasChildren && expanded.includes(item.id) && (
            <ul style={{listStyle:'none'}}>{renderList(item.children, level + 1)}</ul>
          )}
        </li>
        </div>
        </Container>
      );
    });
  };

  return <ul className="parent-child-list">{renderList(data)}</ul>;
};

export default ParentChildList;
