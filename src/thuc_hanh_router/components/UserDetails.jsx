import { useParams } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const users = [
  { id: 1, name: "Nguyễn Văn A", age: 25, email: "a@example.com", img: "/img/hehe.png" },
  { id: 2, name: "Kim Ri Cha", age: 40, email: "kimRiCha7@example.com", img: "/img/OIP.jpg" },
  { id: 3, name: "Lê Văn C", age: 28, email: "c@example.com", img: "/img/OIP (1).jpg" },
];

function UserDetail() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));
  return (
    <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", maxWidth: "400px", margin: "auto" }}>
      <img
        src={user.img}
        alt="user"
        style={{ width: "90%", height: "auto", borderRadius: "50%" }}
      />
      <div style={{ padding: "16px" }}>
        <Typography variant="h5" component="div">
          {user.name}
        </Typography>
        <Typography variant="body2" color="#fff">
          Tuổi: {user.age}
        </Typography>
        <Typography variant="body2" color="#fff">
          Email: {user.email}
        </Typography>
      </div>
    </div>
  );
}

export default UserDetail;
