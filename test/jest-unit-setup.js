process.env.DB_NAME="blogsdb_test"
process.env.DB_USER=r="root"
process.env.DB_PASSWORD="change-me"
process.env.DB_HOST="localhost"
process.env.DB_PORT="3306"
process.env.PORT="8081"

// set up manual mocks for '/config' and '/models'
jest.mock("../config/database");
jest.mock("../models/user");
jest.mock("../models/post");
jest.mock("../models/comment");
jest.mock("../models/like");
