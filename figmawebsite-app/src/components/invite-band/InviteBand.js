import InviteButton from './invite-button/InviteButton'
import classes from './InviteBand.module.css'
const InviteBand = () => {
    return (<div className={classes.inviteBand}>
        <p className={classes.text}>Invite friends to Fashion Sale and get up to $50 Bonus for every invite</p>
        <InviteButton label="invite now"/>
    </div>);
};
export default InviteBand;