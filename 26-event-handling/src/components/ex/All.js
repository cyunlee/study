import React, { Component } from 'react';

class AllEx extends Component {
    state = {
        bgcolor: '',
        color: '',
        src: '',
        content: '',
    }

    render(){
        const {bgcolor, color, src, content} = this.state;
        const changeFruit= (e) => {
            var selectVal = e.target.value;
            console.log(selectVal);
            if(selectVal === 'peach'){
                this.setState({src: 'https://img.hankyung.com/photo/202207/BD.30664440.1.jpg'})
            }else if(selectVal === 'apple'){
                this.setState({src:'https://health.chosun.com/site/data/img_dir/2023/06/20/2023062002262_0.jpg'})
            }else if(selectVal === 'banana'){
                this.setState({src: 'https://ojsfile.ohmynews.com/CT_T_IMG/2021/0223/IE002764698_LT.jpg'})
            }else if(selectVal === 'orange'){
                this.setState({src: 'https://www.tamnao.com/data/sv/thumb/SV00002783_1.jpg'})
            }else if(selectVal === 'melon'){
                this.setState({src:'https://i.namu.wiki/i/XJVhrp8BXXwNeO2oSMmXg0jU8Ebjz_DIphW7d0yVdVKt2aHuxbEiQbLyqSbDAOZxFMuwIddv4Qfzej8w_pBsKw.webp'})
            }
        }
        const changeBG = (e) => {
            var selectVal = e.target.value;

            console.log(selectVal);

            if(selectVal === 'red'){
                this.setState({
                    bgcolor: 'red'
                })
            }else if(selectVal === 'orange'){
                this.setState({
                    bgcolor: 'orange'
                })
            }else if(selectVal === 'yellow'){
                this.setState({
                    bgcolor: 'yellow'
                })
            }else if(selectVal === 'green'){
                this.setState({
                    bgcolor: 'green'
                })
            }else if(selectVal === 'blue'){
                this.setState({
                    bgcolor: 'blue'
                })
            }else if(selectVal === 'purle'){
                this.setState({
                    bgcolor: 'purple'
                })
            }else if(selectVal === 'black'){
                this.setState({
                    bgcolor: 'black'
                })
            }else if(selectVal === 'white'){
                this.setState({
                    bgcolor: 'white'
                })
            }
        }

        const changeColor = (e) => {
            var selectVal = e.target.value;
            console.log(selectVal);

            if(selectVal === 'pink'){
                this.setState({
                    color: 'pink'
                })
            }else if(selectVal === 'white'){
                this.setState({
                    color: 'white'
                })
            }else if(selectVal === 'black'){
                this.setState({
                    color: 'black'
                })
            }
        }

        const inputText = (e) => {
            var inputVal = e.target.value;
        
            this.setState({
                content: inputVal
            })
        }
        return(
            <div>
                과일: <select onChange={changeFruit}>
                    <option value="peach">복숭아</option>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="orange">오렌지</option>
                    <option value="melon">멜론</option>
                </select>
                배경색: <select onChange={changeBG}>
                    <option value="red">빨강</option>
                    <option value="orange">주황</option>
                    <option value="yellow">노랑</option>
                    <option value="green">초록</option>
                    <option value="blue">파랑</option>
                    <option value="purple">보라</option>
                    <option value="black">검정</option>
                    <option value="white">하양</option>
                </select>
                글자색: <select onChange={changeColor}>
                    <option value="white">하양</option>
                    <option value="pink">핑크</option>
                    <option value="black">검정</option>
                </select>
                <br />
                내용: <input type="text" onChange={inputText}/>
                <br />
                <img className='fruit' src={src} alt="과일 사진" />
                <br/>
                <span style={{backgroundColor: bgcolor, color: color}}>{content}</span>
            </div>
        )
    }
}

export default AllEx;