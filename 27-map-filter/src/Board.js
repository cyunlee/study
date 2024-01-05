import React, { useState } from 'react';
import {useRef} from 'react';

function Board() {
    const [inputTitle, setInputTitle] = useState('');
    const [inputWriter, setInputWriter] = useState('');

    const [article, setArticle] = useState([]);

    const refWriter = useRef();
    const refTitle = useRef();

    const addArticle = () => {

        if(inputWriter===''){
            refWriter.current.focus();
            return;
        }else if(inputTitle===''){
            refTitle.current.focus();
            return;
        }

        const newArticle = article.concat({
            id: article.length + 1,
            title: inputTitle,
            writer: inputWriter,
        });

        setArticle(newArticle);
        setInputTitle('');
        setInputWriter('');

    };
    

    return(
    <>
        작성자 : <input type="text" value={inputWriter} ref={refWriter} onChange={(e)=>{setInputWriter(e.target.value)}} />
        제목 : <input type="text" value={inputTitle} ref={refTitle} onChange={(e)=>{setInputTitle(e.target.value)}}/>

        <button onClick={addArticle}>작성</button>

        <br />

        <select name="" id="">
            <option value="">작성자</option>
            <option value="">제목</option>
        </select>

        <input type="text" placeholder="검색어"/>
        <button >검색</button>

        <table border="1">
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            {/* map */}
            {article.map((value) => (
                <tr key={value.id}>
                    <td>{value.id}</td>
                    <td>{value.title}</td>
                    <td>{value.writer}</td>
                </tr>
            ))}
        </table>

        

    </>
       

    )
}

export default Board;