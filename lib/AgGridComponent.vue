<script lang="ts" setup>
import { reactive, ref } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "ag-grid-enterprise";
import IoCodeTitle from "./IoCodeTitle.vue";
import type {
  FirstDataRenderedEvent,
  GridOptions,
  GridReadyEvent,
  GridSizeChangedEvent,
  RowSelectedEvent,
} from "ag-grid-community";
const emit = defineEmits([
  "onGridReady",
  "RowSelected",
  "onFirstDataRendered",
  "SelectedRow",
]);
const props = defineProps({
  AgGridStyle: {
    type: Object,
    required: false,
    default: () => {
      return reactive({ height: "100%" });
    },
  },
  animateRows: {
    type: Boolean,
    required: false,
    default: true,
  },
  rowSelection: {
    type: String,
    required: false,
    default: "single",
  },
  domLayout: {
    type: String,
    required: false,
    default: "autoHeight",
  },
  columnDefs: {
    type: Array,
    required: true,
  },
  defaultColDef: {
    type: Object,
    required: false,
    default: () => {
      return {
        resizable: true,
        sortable: true,
        suppressMenu: true,
        editable: false,
        flex: 1,
      };
    },
  },
  enableRtl: {
    type: Boolean,
    default: false,
    required: false,
  },
  pagination: {
    type: Boolean,
    required: false,
    default: true,
  },
  paginationAutoPageSize: {
    type: Boolean,
    required: false,
    default: false,
  },
  floatingFilter: {
    type: Boolean,
    required: false,
    default: false,
  },
  paginationPageSize: {
    type: Number,
    required: false,
    default: 20,
  },
  rowData: {
    type: Array,
    required: true,
  },
  sideBar: {
    type: Boolean,
    required: false,
    default: false,
  },
  suppressRowClickSelection: {
    type: Boolean,
    required: false,
    default: false,
  },
});
const floating = ref(props.floatingFilter);
const onGridReady = (params: GridReadyEvent) => {
  emit("onGridReady", params);
  if (props.floatingFilter) {
    filterTrigger();
  }
};

const onFirstDataRendered = (params: FirstDataRenderedEvent) => {
  emit("onFirstDataRendered", params);
};

const onSelectionChanged = (row: RowSelectedEvent) => {
  const selectedData = row.api.getSelectedRows();
  emit("SelectedRow", selectedData);
};

const onGridSizeChanged = (params: GridSizeChangedEvent) => {
  params.api.sizeColumnsToFit();
};

const onRowSelected = (row: RowSelectedEvent) => {
  emit("RowSelected", row);
};
const deleteRow = (row: RowSelectedEvent) => {
  gridOptions.rowData!.splice(row.rowIndex!, 1);
  gridOptions.api!.setRowData(gridOptions.rowData!);
};
/* Enable or Disable filter */
const filterTrigger = () => {
  floating.value = !floating.value;
  const columnDefs = props.columnDefs;
  columnDefs.forEach((colDef) => {
    colDef.floatingFilter = floating.value;
  });
  gridOptions.api!.setColumnDefs(columnDefs);
};
const gridOptions: GridOptions = {
  defaultColDef: {
    sortable: true,
    floatingFilter: false,
    suppressSizeToFit: true,
    filter: false,
    flex: 1,
  },
  components: {
    iocodetitle: IoCodeTitle,
  },
  suppressRowTransform: true,
  tooltipShowDelay: 0,
  allowContextMenuWithControlKey: false,
  tooltipHideDelay: 2000,
  enableBrowserTooltips: true,
};
defineExpose({
  gridOptions,
  deleteRow,
});
</script>
<template>
  <el-row class="ag-grid-common">
    <el-button
      v-if="floatingFilter"
      class="grid-filter-trigger"
      icon="Filter"
      text=""
      :type="floating ? 'primary' : ''"
      @click="filterTrigger"
    />
    <ag-grid-vue
      class="ag-theme-alpine"
      :style="AgGridStyle"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :rowSelection="rowSelection"
      :animateRows="animateRows"
      :floatingFilter="floating"
      :pagination="pagination"
      :domLayout="domLayout"
      :suppress-row-click-selection="suppressRowClickSelection"
      :paginationAutoPageSize="paginationAutoPageSize"
      :paginationPageSize="paginationPageSize"
      :grid-options="gridOptions"
      :sideBar="sideBar"
      @grid-ready="onGridReady"
      @row-selected="onRowSelected"
      @first-data-rendered="onFirstDataRendered"
      @onGridSizeChanged="onGridSizeChanged"
      :enableRtl="enableRtl"
      @selection-changed="onSelectionChanged"
    >
    </ag-grid-vue>
  </el-row>
</template>

<style lang="scss">
.ag-header-cell.text-center {
  .ag-header-cell-label {
    justify-content: center;
  }
}

.ag-header-cell-text {
  font-weight: 600;
}

.ag-row .ag-cell {
  display: flex;
  justify-content: center;
  /* align horizontal */
  align-items: center;
}

text-center * {
  justify-content: center;
}

.ag-header-cell-label {
  justify-content: center;
}

.grid-filter-trigger {
  background-color: unset !important;
}

.ag-popup {
  position: absolute;
  height: 100%;
  width: 100%;
}

.ag-grid-common {
  border: 1px solid $color-gray-1 !important;
  box-shadow: var(--el-box-shadow-light);
  flex-direction: column;
}
</style>
