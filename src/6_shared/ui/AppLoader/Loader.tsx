import { classNames } from '@/6_shared'
import './Loader.scss'

export const Loader = () => (
    <div className={classNames('lds-ellipsis', {}, [])}>
        <div />
        <div />
        <div />
        <div />
    </div>
)
