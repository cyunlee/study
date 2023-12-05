const User = (Sequelize, DataTypes) => {

    const model = Sequelize.define(
        'user', //param1 모델 이름 설정
        {
            //id INT NOT NULL PRIMARY KEY auto_increment,
            id:{
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            //userid VARCHAR(20) NOT NULL,
            userid: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            //name VARCHAR(10) NOT NULL,
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            //pw VARCHAT(20) NOT null,
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        },
        {//params3 옵션지정
            charset: 'utf8',
            collate: 'utf8_general_ci',
            tableName: 'user',
            freezeTableName: true,
            timestamps: false,
        }
    )
    return model;
}

module.exports = User;