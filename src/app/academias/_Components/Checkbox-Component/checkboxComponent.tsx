import { Checkbox } from "../../../../../@app/Components/ui/checkbox";
import { Label } from "../../../../../@app/Components/ui/label";

const CheckboxComponent = () => {
  return (
    <div>
      <h1 className="mb-7 text-xl font-semibold text-black">
        Experiências na unidade
      </h1>
      <div className="flex items-center space-x-4">
        <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
        <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
          Planos com promoção
        </Label>
      </div>
      {/*  */}
      <div className="my-10">
        <h1 className="mb-4 text-xl font-semibold text-black">Áreas</h1>
        <div className="mb-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Cadeira de Massagem
          </Label>
        </div>
        <div className="flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Sala de ginástica{" "}
          </Label>
        </div>
      </div>
      {/*  */}
      <div className="my-10">
        <h1 className="mb-4 text-xl font-semibold text-black">Estrutura</h1>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Armário rotativo
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Ducha aquecida{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Professores formados{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Estacionamento{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Ar condicionado{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Balança de Bioimpedância{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Bicicletário{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Smart Fit Energy{" "}
          </Label>
        </div>
        {/*  */}
        <div className="my-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Equipamentos modernos{" "}
          </Label>
        </div>
      </div>
      {/*  */}
      <div className="my-10">
        <h1 className="mb-4 text-xl font-semibold text-black">Aulas</h1>
        <div className="mb-4 flex items-center space-x-4">
          <Checkbox id="promotion-plans" className="h-6 w-6 text-black" />
          <Label htmlFor="promotion-plans" className="text-sm text-slate-950">
            Smart Box
          </Label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxComponent;
