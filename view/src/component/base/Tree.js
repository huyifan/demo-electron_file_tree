import React from "react"
import { Tree } from 'antd';
const { DirectoryTree } = Tree;
const treeData=[]
const spanStyle={  whiteSpace:'nowrap',textOverflow:'ellipsis'}
for(let i=0;i<12;i++){
   treeData.push({
      title: 'parent '+i,
      key: '0-'+i,
      children: [
         { title: <span style={spanStyle}>leaf1111 0-+i</span>, key: '0-'+i+'-0', isLeaf: true },
         { title:<span style={spanStyle}>leaf 0-+i</span>    , key: '0-'+i+'-1', isLeaf: true },
      ],
   })
}

export default class BaseTree extends React.Component{
   constructor(props) {
      super(props);
   }

   onExpand=()=>{

   }

   onSelect=()=>{

   }

   render() {
      return <div id={'tree_container'} style={{height:'100%',width:'100%',overflow:'auto'}}>
         <DirectoryTree
             style={{height:'100%'}}
             multiple
             defaultExpandAll
             onSelect={this.onSelect}
             onExpand={this.onExpand}
             treeData={treeData}
         />
      </div>
   }
}