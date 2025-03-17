import { useState } from "react";

function CreateForm({addTodo}) {

    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        // 加入資料後網頁預設會重整 導致state變回初始值
        // 所以用preventDefault()取消預設行為
        e.preventDefault();
        addTodo(content);
        setContent('');
    }

    return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入代辦事項"
      value={content} onChange={(e)=>{setContent(e.target.value)}} />
      {/* 按鈕設定type="submit" 因此按按鈕會觸發form的onSubmit */}
      <button type="submit">加入</button>
    </form>
  );
}

export default CreateForm