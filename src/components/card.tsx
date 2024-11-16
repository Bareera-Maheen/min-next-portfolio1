interface CardProps {
    title: string;
    description: string;
    image: string;
  }
  
  const Card = ({ title, description, image }: CardProps) => {
    return (
      <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-blue-600">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;