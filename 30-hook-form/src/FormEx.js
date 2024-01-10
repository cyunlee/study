import {useForm} from 'react-hook-form';

function FormEx() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    }=useForm();

    const onValid=(data) => {
        console.log(data);
    }

    const onInValid=(err) => {
        console.log(err);
    }

    return(
        <>
            <h1>Form 실습</h1>

            <form onSubmit={handleSubmit(onValid, onInValid)}>
                <input type="text" placeholder="이름(name) " {...register('name', {required: '이름을 입력해주세요'})} />
                {/* 에러 메시지 */}
                {errors.name?.message}
                <br/>
                <input type="text" placeholder="나이(age)" {...register('age', {min: {value:0, message: '0이상의 숫자만 입력가능합니다.'}})} />
                {/* 에러 메시지 */}
                {errors.age?.message}
                <br/>
                <button type="submit">제출</button>
            </form>
        </>

    )
}

export default FormEx;