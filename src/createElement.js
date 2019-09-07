export function createElement(type,props,children) {
   let obj={
        type,
       props:{...props,children},
       key:props.key||undefined,
       ref:props.ref||undefined,
    }
    return obj;
}


export  function render(obj, container, callback){
  let {props,type}=obj;
  let {children}=props;
  let el=document.createElement(type);
  for(let attr in props){
     let value=props[attr];
     switch (attr) {
         case 'className':
             el.setAttribute('class',value);
             break;
         case 'style':
             for (let key in value){
                 el['style'][key]=value[key];
             }
             break;
         default:
                el.setAttribute(attr,value);
             break;
     }
  }

  let textNode=document.createTextNode(children);
  el.appendChild(textNode);

  callback&&callback();

  container.appendChild(el);
}




