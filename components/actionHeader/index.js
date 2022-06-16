import Image from "next/image";

const ActionHeader = ({
    className,
    leftIcon,
    leftText = null,
    onClickLeftAction,
    title,
    rightElement

}) => {
    return (
        <div className={`headerAction ${className}`}>
            {leftIcon ? (
                <Image
                    src={leftIcon}
                    alt='Left Icon of Action Header'
                    onClick={onClickLeftAction}
                    width={20}
                    height={20}
                />
            ) : (
                leftText !== null && (
                    <span 
                        className="leftTextActionHeader"
                        onClick={onClickLeftAction}>
                            {leftText}
                        </span>
                )
            )}

            <h3>{title}</h3>

            {rightElement && (<button 
                type='button'
            >
                {rightElement}
            </button>)}
        </div>)
}

export default ActionHeader;