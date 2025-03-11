import PublicPageContainer from "../../components/containers/publicPageContainer";

export default function Jobs() {
  return (
    <PublicPageContainer>
      <div className="max-w-7xl mx-auto py-9 px-6 my-5">
        <h2 className="text-4xl mb-3 text-center">Trabajos</h2>
       
       <div className="my-9 p-6 border-dashed border border-1 border-[#ccc] text-center">
            <p>¡No se encontraron trabajos!</p>
       </div>
      </div>
    </PublicPageContainer>
  );
}
