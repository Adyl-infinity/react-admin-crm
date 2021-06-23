import './userList.css'
import { DataGrid } from '@material-ui/data-grid';

export default function UserList() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        { field: 'username', headerName: 'User', width: 200, renderCell: (params) =>{
            return (
                <div className="userListUser">
                    <img className="userListImg" src={params.row.avatar} alt=""/>
                    {params.row.username}
                </div>
            )
            } },
        { field: 'email', headerName: 'Email', width: 210 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction Volume', width: 210 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <button className="userListEdit">Edit</button>
            )
            } }
    ];

    const rows = [
        { id: 1,
          username: 'John Snow',
          avatar: "https://images.pexels.com/photos/7705987/pexels-photo-7705987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "john.snow@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 2,
          username: 'Roger Burton',
          avatar: "https://images.pexels.com/photos/7705906/pexels-photo-7705906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "roger.burton@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 3,
          username: 'Lawrence Obrien',
          avatar: "https://images.pexels.com/photos/7102271/pexels-photo-7102271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "lawrence.obrien@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 4,
          username: 'Samantha Padilla',
          avatar: "https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "samantha.padilla@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 5,
          username: 'Sally Mcdaniel',
          avatar: "https://images.pexels.com/photos/2552127/pexels-photo-2552127.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "sally.mcdaniel@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 6,
          username: 'Molly Dixon',
          avatar: "https://images.pexels.com/photos/3916455/pexels-photo-3916455.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "molly.dixon@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 7,
          username: 'Elena Cunningham',
          avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
          email: "elena.cunningham@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 8,
          username: 'Janice Holmes',
          avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "janice.holmes@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 9,
          username: 'Alexander Woodward',
          avatar: "https://images.pexels.com/photos/7163381/pexels-photo-7163381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "alexander.woodward@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
        { id: 10,
          username: 'Max Nicholls',
          avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          email: "max.nicholls@gmail.com",
          status: "active",
          transaction: "$120.00"
        },
    ];
    return (
        <div className="userList">
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
