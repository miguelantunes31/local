import React,{Component} from "react";
import { List,AutoSizer } from 'react-virtualized';


class Virtualize extends Component {

    renderRow = ({index,isScrolling,key,style}) =>{
        return(
            <div key={key} style={style}>
                <div>{this.props.lista[index]}</div>
            </div>
        )
    }

    render(){
        return(
            <AutoSizer>
                {
                    ({width,height})=>{
                        return<List 
                            rowCount={this.props.lista.length}
                            width={width}
                            height={height+400}
                            rowHeight={50}
                            rowRenderer={this.renderRow}
                        />
                    }
                }
            </AutoSizer>
        );

    }



}

export default Virtualize;