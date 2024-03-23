import { IconType } from "react-icons";


export interface CardProps {
    logo: IconType;
    title?: string;
    description?: string;
    iconColor?: string;  
    iconBackgroundColor: string
}

const Card: React.FC<CardProps> = ({ logo: Logo, title, description, iconColor, iconBackgroundColor }) => {
    return (
        <div className="rounded-md w-full space-y-4">
            <div className={`p-4 rounded-md bg-gray-400 w-fit ${iconBackgroundColor}`}>
            <Logo className={iconColor}/>
            </div>
            <h2 className="card-title">{title}</h2>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;