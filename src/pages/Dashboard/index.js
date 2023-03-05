import styles from './Dashboard.module.scss'
import classNames from 'classnames/bind';
var cx = classNames.bind(styles); 

function DashBoard() { 
    return ( 
        <div className={cx('dashboard')}>
            <div className={cx('tags')}>
                
            </div>
        </div>
    )
}

export default DashBoard;