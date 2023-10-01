const columnsSuburbia = [
  {
    label: "P\xF3liza",
    field: "certificado_aseguradora",
    width: "auto",
    sortable: false
  },
  {
    label: "Inicio Vigencia",
    field: "efective_from",
    width: "auto",
    sortable: false
  },
  {
    label: "Cancelaci\xF3n",
    field: "cancelation_date",
    sortable: true
  },
  {
    label: "Documento",
    field: "id_number",
    sortable: false
  },
  {
    label: "Nombres",
    field: "name",
    width: "auto",
    sortable: false
  },
  {
    label: "Apellidos 1",
    field: "last_name_1",
    width: "auto",
    sortable: false
  },
  {
    label: "Apellidos 2",
    field: "last_name_2",
    width: "auto",
    sortable: false
  },
  {
    label: "N\xFAmero M\xF3vil",
    field: "phone_1",
    sortable: false
  },
  {
    label: "Email",
    field: "email",
    sortable: false
  },
  {
    label: "Producto",
    field: "product_id",
    width: "auto",
    sortable: false
  },
  {
    label: "Plan",
    field: "plan_id",
    width: "auto",
    sortable: false
  },
  {
    label: "Prima neta",
    field: "prima_neta",
    width: "auto",
    sortable: false
  },
  {
    label: "IVA",
    field: "iva",
    width: "auto",
    sortable: false
  },
  {
    label: "Prima total",
    field: "premium",
    width: "auto",
    sortable: false
  },
  {
    label: "Status",
    field: "status_policy",
    sortable: false
  }
];
const labelsSuburbia = {
  certificado_aseguradora: "POLIZA",
  efective_from: "INICIO VIGENCIA",
  cancelation_date: "CANCELACION",
  id_number: "DOCUMENTO",
  name: "NOMBRES",
  last_name_1: "APELLIDOS 1",
  last_name_2: "APELLIDOS 2",
  phone_1: "NUMERO MOVIL",
  email: "EMAIL",
  product_id: "PRODUCTO",
  plan_id: "PLAN",
  prima_neta: "PRIMA NETA",
  iva: "IVA",
  premium: "PRIMA TOTAL",
  status_policy: "ESTATUS"
};
export { columnsSuburbia, labelsSuburbia };
