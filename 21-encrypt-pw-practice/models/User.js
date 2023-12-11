// TODO: User 모델 정의

const User = (Sequelize, DataTypes) => {
    //Sequelize는 models/index.js에서의 sequelize
    //DataTypes는 models/index.js에서의 Sequelize

    const model = Sequelize.define(
        'user', //param1 : 모델 이름 설정
        {
            //id int AI PK
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncerment: true
            },
            pw: {
                //pw VARCHAR(15) NOT NULL,
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(15),
                allowNull: false,
            },
            userid: {
                type: DataTypes.STRING(15),
                allowNull: false,
            }
        }, //param2 : 컬럼 정의 
        {
            charset: "utf8",
            collate: "utf8_general_ci",
            tableName: 'user', //실제 DB 테이블 이름 명시
            freezeTableName: true, //첫 번째 인자로 넘겨준 모델 이름을 그대로 테이블 이름으로 고정
            //시퀄라이즈는 기본적으로 테이블 이름을 모델 + s로 가져가요
            //charset, collate 값이 있는데 db 정의할 때 한글 인코딩 가능하도록 만들어뒀기 때문에 따로 설정 할 필요 x 
            timestamps: false,
            // - 데이터가 추가되고 수정된 시간을 자동으로 컬럼으로 만들어서 기록함

        }//param3: 모델 옵션 정의
    )
    return model;
}

module.exports = User;