import ButtonPartager from './ButtonPartager';

function MaRecette() {
  const handlePartager = () => {
    // ajouter la recette à l'état global ici
  };

  return (
    <div>
      {/* autres éléments du composant */}
      <ButtonPartager onPartager={handlePartager} />
    </div>
  );
}
