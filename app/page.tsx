import { TablaMaestros } from "@/components/tabla-maestros";
import { TablaEstudiantes } from "../components/tabla-estudiantes";

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <TablaEstudiantes />
      <TablaMaestros />
    </main>
  );
}