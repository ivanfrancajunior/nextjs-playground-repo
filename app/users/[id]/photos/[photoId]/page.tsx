import React from "react";
type Props = {
  params: {
    id: number;
    photoId: number;
  };
};
const PhotoDetails = ({ params: { photoId, id } }: Props) => {
  const teste = 45;
  return (
    <div>
      User: {id} - Photo: {photoId}
    </div>
  );
};

export default PhotoDetails;
