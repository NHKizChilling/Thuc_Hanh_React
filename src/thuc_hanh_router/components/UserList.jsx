import { Link } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const users = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Kim Ri Cha" },
  { id: 3, name: "Lê Văn C" },
];

function UserList() {
  return (
    <List>
      {users.map((user) => (
        <ListItem button component={Link} to={`/user/${user.id}`} key={user.id}>
          <ListItemText primary={user.name} />
          <hr />
        </ListItem>
      
      ))}
    </List>
  );
}

export default UserList;
