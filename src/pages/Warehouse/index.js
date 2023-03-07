import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles from './Warehouse.module.scss';
import classNames from 'classnames/bind';
var cx = classNames.bind(styles);

function Warehouse() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchDanhMuc() {
            const requestURL = '/AppFood/monngaunhien.php';
            const response = await fetch(requestURL);
            const responseJSON = await response.json();
            const { result } = responseJSON;
            setPosts(result);
        }
        fetchDanhMuc();
    }, []);
    return (
        <div className={cx('container')}>
            <>
                <Table className={cx('table')} hover>
                    <thead className={cx('table-heading')}>
                        <tr className="d-flex">
                            <th className="col-2" scope="col">
                                Tên món ăn
                            </th>
                            <th className="col-4" scope="col">
                                Hình ảnh
                            </th>
                            <th className="col-1" scope="col">
                                Giá
                            </th>
                            <th className="col-5" scope="col">
                                Mô tả
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr className="d-flex" key={index}>
                                <td className="col-2">{post.tenmon}</td>
                                <td className="col-4">
                                    <img className={cx('table-image')} src={post.hinhmon} alt="" width={200} />
                                </td>
                                <td className="col-1">{post.gia}</td>
                                <td className="col-5">{post.mota}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        </div>
    );
}

export default Warehouse;
