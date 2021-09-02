import classes from './InviteButton.module.css'
const InviteButton = props => {
    const {label} = props;
    return (<button className={
        classes.inviteButton
    }>
      
        {label}
        </button>)
};
export default InviteButton;