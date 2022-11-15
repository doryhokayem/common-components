<script setup lang="ts">
import ElementCard from "../lib/ElementCard.vue";
import ElementInput from "../lib/ElementInput.vue";
import ElementForm from "../lib/ElementForm.vue";
import IoCodeTitle from "../lib/IoCodeTitle.vue";
import AgGridComponent from "../lib/AgGridComponent.vue";

import { reactive } from "vue";

const columnDefs = [
  {
    headerName: "Dataset Code",
    field: "io_set",
    tooltipField: "io_set",
    sortable: true,
    resizable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
    cellRendererSelector: (params) => {
      return {
        component: IoCodeTitle,
        params: {
          ioCode: {
            value: params.value,
            key: params.data.id,
          },
        },
      };
    },
  },
  {
    headerName: "Created By",
    field: "created_by",
    tooltipField: "created_by",
    sortable: false,
    resizable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
  },
  {
    headerName: "Creation Date",
    field: "creation_date",
    sortable: true,
    resizable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
  },
  {
    headerName: "Updated On",
    field: "updated_on",
    sortable: true,
    resizable: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    floatingFilterComponentParams: { suppressFilterButton: true },
  },
  {
    headerName: "Actions",
    field: "actions",
    resizable: true,
    cellRenderer: function (params) {
      let parentDiv = document.createElement("div");
      let AddButton = document.createElement("span");
      let DeleteButton = document.createElement("span");

      AddButton.innerHTML =
        '<button class="el-button el-button--default el-button--small ml-2 ' +
        params.data.buttonClass +
        '">Load</button>';

      DeleteButton.innerHTML =
        '<button class="el-button el-button--default el-button--small ml-2 ' +
        params.data.buttonClass +
        '">Delete</button>';

      AddButton.addEventListener("click", () => {});

      parentDiv.append(AddButton);
      parentDiv.append(DeleteButton);
      return parentDiv;
    },
  },
];
const rowData = reactive([
  {
    io_set: "DTS-123456-Database Name 1",
    created_by: "User 1",
    creation_date: "11/11/2021",
    updated_on: "12/11/2021",
    buttonClass: "disabled",
  },
  {
    io_set: "DTS-123452-Database Name 2",
    created_by: "User 2",
    creation_date: "12/11/2021",
    updated_on: "12/11/2021",
    buttonClass: "",
  },
  {
    io_set: "DTS-123434-Database Name 3",
    created_by: "User 2",
    creation_date: "12/11/2021",
    updated_on: "12/11/2021",
    buttonClass: "",
  },
]);
const formLogin = reactive({
  email: "",
  password: "",
});
const labelWidth = "100px";
const inputWidth = "400px";
</script>

<template>
  <div>
    <ElementCard title="Log In" width="50%">
      <ElementForm
        buttonSubmitLabel="Log in"
        buttonClass="el-button--large button-class"
        :label-position="'left'"
        :label-width="labelWidth"
      >
        <ElementInput
          v-model="formLogin.email"
          type="text"
          :label-width="labelWidth"
          :width-input="inputWidth"
          name="email"
          size="large"
          prop="email"
          label="Email"
          prepend="AGT-"
        />
        <ElementInput
          v-model="formLogin.password"
          :label-width="labelWidth"
          :width-input="inputWidth"
          name="password"
          prop="password"
          size="large"
          type="password"
          label="Password"
        />
      </ElementForm>
    </ElementCard>
    <ElementCard title="List of Datasets" width="80%">
      <AgGridComponent
        :pagination="true"
        :pagination-page-size="12"
        :row-height="60"
        :column-defs="columnDefs"
        :row-data="rowData"
        floating-filter
        suppress-row-click-selection
      >
      </AgGridComponent>
    </ElementCard>
  </div>
</template>
