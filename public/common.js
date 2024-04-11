!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2035768320098958');
fbq('track', 'PageView');


const handleClicklx = (event) => {
  // console.log(event.target.nextElementSibling.target)
  const clickedElement = event.target; // 获取触发点击事件的元素
  const el_nextElementSibling = event.target.nextElementSibling
  // 判断点击元素是否包含类名 'cur'
  if (clickedElement.classList.contains('cur')) {
    // 若包含，移除类名 'cur'
    clickedElement.classList.remove('cur');
    el_nextElementSibling.classList.remove('cur')
  } else {
    // 若不包含，添加类名 'cur'
    clickedElement.classList.add('cur');
    el_nextElementSibling.classList.add('cur')
  }
}

const handleClickAddressRImg = (event) =>{
  const zuparentNode = findClosestParentWithClass(event.target,'address')
  const _sibling = zuparentNode.children[0].children[0]
  _sibling.src = event.target.src
}

function findClosestParentWithClass(element, className) {
  let parent = element.parentNode;
  
  while (parent != null && parent.nodeType === Node.ELEMENT_NODE) {
    if (parent.matches('div.' + className)) {
      return parent;
    }
    parent = parent.parentNode;
  }
  
  return null;
}