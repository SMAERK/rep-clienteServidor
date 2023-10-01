var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { u as useStorage, c as createI18n$1, a as createRouter$1, b as createWebHistory, n as nprogress$1, d as defineComponent, e as computed, o as openBlock, f as createElementBlock, r as renderSlot, g as normalizeClass, h as unref, i as useCssVars, j as h, R as RouterLink, k as ref, v, l as n, m as useI18n, p as createBlock, w as withCtx, T as Transition, q as createBaseVNode, t as toDisplayString, s as createVNode, x as createTextVNode, y as createCommentVNode, z as resolveComponent, A as resolveDynamicComponent, F as Fragment, I as Iconify$1, B as watchEffect, C as defineStore, D as usePreferredDark, E as axios, G as setup, H as plugin, J as defineAsyncComponent, K as createHead, L as createPinia, M as createApp$1, S as Suspense, N as index, O as JsonCSV, V as VueSweetalert2 } from "./vendor.6548d360.js";
const p = function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
};
p();
var messages = {
  "de": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Selecione o idioma"]);
    },
    "login": {
      "login-welcome": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bem-vindo"]);
      },
      "login-initSesion": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Iniciar sess\xE3o"]);
      },
      "login-email": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["O email"]);
      },
      "login-password": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Senha"]);
      },
      "login-forgot": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Esqueci minha senha"]);
      },
      "login-remember": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Lembrar senha"]);
      },
      "login-go": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Entrar"]);
      }
    },
    "dashboard": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
        return _normalize(["Bem-vind", _interpolate(_named("add"))]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
        return _normalize(["Estamos muito felizes em v\xEA-l", _interpolate(_named("add")), " novamente."]);
      },
      "options": {
        "today": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hoje"]);
        },
        "yesterday": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ontem"]);
        },
        "last_7_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 7 dias"]);
        },
        "last_30_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 30 dias"]);
        },
        "last_90_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 90 dias"]);
        },
        "last_month": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xEAs passado"]);
        },
        "last_year": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ano passado"]);
        },
        "week_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Semana at\xE9 \xE0 data"]);
        },
        "month_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xEAs at\xE9 \xE0 data"]);
        },
        "year_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ano at\xE9 \xE0 data"]);
        },
        "currentMonth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["M\xEAs actual"]);
        },
        "lastSemester": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 6 meses"]);
        }
      },
      "labels": {
        "products": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Produtos"]);
        },
        "totalActivePolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total de Certificados activos"]);
        },
        "totalSoldPolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total de Certificados Vendidos"]);
        },
        "totalCanceledPolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total de Certificados Canceladas"]);
        },
        "ageAverage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Idade m\xE9dia"]);
        },
        "region": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Regi\xE3o"]);
        },
        "created": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Criado"]);
        },
        "status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Status"]);
        },
        "active": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ativo"]);
        },
        "inactive": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Inativo"]);
        },
        "totalActivePremium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Montante do pr\xE9mio"]);
        },
        "totalCanceledPremium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Montante Cancelado"]);
        },
        "total": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total"]);
        },
        "manualRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gama personalizada"]);
        },
        "yes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sim"]);
        },
        "selectRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gamas pr\xE9-definidas"]);
        },
        "no": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No"]);
        },
        "dateRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Intervalo de datas a consultar"]);
        },
        "policynotexist": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A pol\xEDtica n\xE3o existe"]);
        }
      }
    },
    "sidebar": {
      "titles": {
        "home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Inicio"]);
        },
        "policies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ap\xF3lices"]);
        },
        "reports": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reportes"]);
        },
        "users": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Usu\xE1rio"]);
        },
        "dashboardd": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Dashboards"]);
        }
      },
      "subItems": {
        "policyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consultar Ap\xF3lices"]);
        },
        "historyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consultar Hist\xF3rico"]);
        },
        "productsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Products"]);
        },
        "paymentsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consultar Pagamentos"]);
        },
        "reportsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consultar reportes"]);
        },
        "userManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gest\xE3o Usu\xE1rio"]);
        },
        "PolicyDetail": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Lista Segurados"]);
        },
        "InsuredConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta Segurado"]);
        },
        "saleGeneration": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gerar Venda"]);
        },
        "loadManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gerenciamento De Carga"]);
        },
        "novo": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Novo"]);
        },
        "autogestaoTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sistema de autogest\xE3o"]);
        },
        "reportsConsultClosedTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Venta de Turnos"]);
        },
        "reportsConsultClosedTurnedTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Venta de Trunos"]);
        },
        "reportsConsultTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cierre de Turnos"]);
        }
      },
      "profileDropdown": {
        "logout": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sair"]);
        }
      }
    },
    "utils": {
      "vuegoodtable": {
        "config": {
          "rowsPerPage": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Registros por p\xE1gina"]);
          },
          "of": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De"]);
          },
          "previous": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Anterior"]);
          },
          "next": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Seguinte"]);
          },
          "search": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tabela de pesquisa"]);
          }
        },
        "columns": {
          "PolicyNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Certificado"]);
          },
          "discountMethod": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Pagamento"]);
          },
          "Plan": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Plano do Sponsor"]);
          },
          "Award": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Pr\xEAmio"]);
          },
          "productId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ID do produto"]);
          },
          "StartValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["In\xEDcio de Vig\xEAncia"]);
          },
          "EndValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fim de Vig\xEAncia"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nome completo"]);
          },
          "type": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tipo de Seguro"]);
          },
          "policy": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ap\xF3lice AIG"]);
          },
          "status": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Status"]);
          },
          "action": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["A\xE7\xE3o"]);
          },
          "PurchaseId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Purchase Id"]);
          },
          "PatientId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Patient Id"]);
          },
          "statusUello": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ativa"]);
            },
            "expired": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expirada"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelado"]);
            }
          },
          "statusminimeds": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ativa"]);
            },
            "question": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["EM EMISS\xC3O"]);
            },
            "emited": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Emitida"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelada"]);
            },
            "slope": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pendente"]);
            }
          },
          "statusReport": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ativa"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelada"]);
            }
          },
          "statusUser": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ativa"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Inactiva"]);
            }
          },
          "pagamento": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Forma de Pagamento"]);
          },
          "statusminimed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Status"]);
          },
          "iniciovigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["In\xEDcio de Vig\xEAncia"]);
          },
          "flebotomista": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Flebotomista"]);
          },
          "fimvigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fim de Vig\xEAncia"]);
          },
          "statusfed": {
            "approve": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aprobada"]);
            }
          },
          "statusFederacion": {
            "approve": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aprobada"]);
            },
            "rejected": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Rechazada"]);
            }
          }
        }
      },
      "buttons": {
        "consult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consultar"]);
        },
        "goBack": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Voltar"]);
        },
        "createUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Criar Usu\xE1rio"]);
        },
        "generateReport": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gerar relat\xF3rio"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ver dados"]);
        },
        "downloadCertificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Baixar Certificado"]);
        },
        "downloadAcuse": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Acuse"]);
        },
        "downloadCaratula": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Caratula"]);
        },
        "update": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Update"]);
        },
        "cancel": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel"]);
        },
        "ExportCSV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Exportar Excel"]);
        }
      },
      "headerCards": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Per\xEDodo de Consulta"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Selecione o per\xEDodo de consulta."]);
        },
        "titleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select preferred filter"]);
        },
        "subtitleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To be able to consult policies, first pick one of the available filters."]);
        },
        "switchLabel1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date Range"]);
        },
        "switchLabel2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quick Search"]);
        },
        "detailsCards": {
          "currentQuote": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Current Quote Information"]);
            },
            "contractorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Contractor Name"]);
            },
            "documentNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document Number"]);
            },
            "transactionType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Transaction Type"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Names"]);
            },
            "lastNames": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Last Names"]);
            },
            "document": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document"]);
            },
            "fullname": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome"]);
            },
            "sponsorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sponsor Name"]);
            }
          },
          "selectedProduct": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Selected Product"]);
            },
            "campaignCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campaign Code"]);
            },
            "productCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo Produto"]);
            },
            "coverageCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["CoverageCode"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["VAT"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Net Premium"]);
            },
            "paidPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Paid Premium"]);
            }
          },
          "paymentInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informa\xE7\xE3o de Pagamento"]);
            },
            "accountType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Forma de Pagamento"]);
            },
            "cardNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Numero de Conta"]);
            },
            "frequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Frequency"]);
            },
            "cycleDay": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cycle Day"]);
            },
            "accountName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome da conta"]);
            },
            "expiredMonth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["M\xEAs de Vig\xEAncia"]);
            },
            "expiredYear": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ano de Expira\xE7\xE3o"]);
            },
            "cardType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Card Type"]);
            },
            "nsu": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["NSU"]);
            },
            "aprovalcode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3d. Aprova\xE7\xE3o"]);
            },
            "paymentFrequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Frequency"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "monthly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mensal"]);
            },
            "Annual": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Anual"]);
            }
          },
          "QuoteInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Quote Information"]);
            },
            "certificateNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Certificate Number"]);
            },
            "status": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Status"]);
            },
            "planCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Code"]);
            },
            "storeName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Store Name"]);
            },
            "effectiveDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Effective Date"]);
            },
            "movementDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Movement Date"]);
            },
            "renewalDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Renewal Date"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Policy Number"]);
            },
            "plan": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan"]);
            },
            "campaign": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campaign"]);
            },
            "premium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pr\xEAmio"]);
            }
          },
          "generalClientInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informa\xE7\xF5es gerais do cliente"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome"]);
            },
            "firstLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["First Last Name"]);
            },
            "secondLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Second Last Name"]);
            },
            "sex": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sexo"]);
            },
            "dateOfBirth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Data de Nascimento"]);
            },
            "datef2m": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Data de emiss\xE3o f2m"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Idade"]);
            },
            "ocupation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ocupa\xE7\xE3o"]);
            },
            "beneficiary": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Beneficiary"]);
            },
            "insured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Insured"]);
            },
            "insuranceType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Insurance Type"]);
            }
          },
          "locationInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informa\xE7\xF5es de localiza\xE7\xE3o"]);
            },
            "streetAndNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Rua e n\xFAmero"]);
            },
            "typehousing": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de resid\xEAncia."]);
            },
            "colony": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de resid\xEAncia"]);
            },
            "city": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cidade"]);
            },
            "state": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estado"]);
            },
            "zipCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo Postal"]);
            },
            "complement": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Complemento"]);
            },
            "barrio": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bairro"]);
            },
            "address": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Dire\xE7\xE3o"]);
            }
          },
          "contactInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informa\xE7\xE3o de contato"]);
            },
            "mobilePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Celular"]);
            },
            "officePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Telefone residencial"]);
            },
            "email": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["E-mail"]);
            },
            "code": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo"]);
            },
            "postalCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo Postal"]);
            }
          },
          "InformationPolicy": {
            "title1": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Detalle de Ap\xF3lice"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Dados do Seguro"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome completo"]);
            },
            "napolice": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["No. Certificado/Bilhete"]);
            },
            "master_policy": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["No. Ap\xF3lice Master AIG"]);
            },
            "datenow": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Data e Hora de Emiss\xE3o"]);
            },
            "typestart": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo Vig\xEAncia"]);
            },
            "typeId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de ID"]);
            },
            "identificationNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de Identifica\xE7\xE3o"]);
            },
            "titlepolicy": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Detalhe da Ap\xF3lice"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero Certificado"]);
            },
            "startofalidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["In\xEDcio de Vig\xEAncia"]);
            },
            "PlanId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plano"]);
            },
            "typecoverage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Cobertura"]);
            },
            "capital": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Capital Segurado / Limite"]);
            },
            "franquia": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Franquia"]);
            },
            "shortage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Car\xEAncia"]);
            },
            "dailyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Numero Di\xE1rias"]);
            },
            "dailyValue": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Valor Di\xE1ria"]);
            },
            "serviceAssitence": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Servi\xE7os de Assist\xEAncia"]);
            },
            "capitalization": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Capitaliza\xE7\xE3o"]);
            },
            "PlaneCapital": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plano de Capitaliza\xE7\xE3o"]);
            },
            "lukyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero da Sorte"]);
            },
            "insuredyName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome Segurado"]);
            },
            "insuredLastname": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sobrenome Segurado"]);
            },
            "idInsured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ID Segurado"]);
            },
            "beneficiaryName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome Benefici\xE1rio"]);
            },
            "beneficiaryLastname": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sobrenome Benefici\xE1rio"]);
            },
            "idBeneficiary": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ID Benefici\xE1rio"]);
            },
            "participationBeneficiary": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["% Part Benefici\xE1rio"]);
            },
            "typetransaction": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Type of Transaction"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Neta"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["IVA"]);
            },
            "Awardfull": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Total"]);
            },
            "PurchaseId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Purchase Id"]);
            },
            "PatientId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Patient Id"]);
            },
            "flebotomist": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["flebotomist"]);
            }
          }
        }
      },
      "tooltips": {
        "deactivateUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Deactivate User"]);
        },
        "deleteUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Delete User"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ver dados"]);
        },
        "cancelPolicy": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel Policy"]);
        },
        "editBeneficiary": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Edit Beneficiary"]);
        }
      },
      "notifMessages": {
        "reportWarning": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["N\xE3o encontramos nenhuma ap\xF3lice!"]);
        }
      },
      "sweetAlertMessages": {},
      "emptyDataPlaceholders": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No Available Data"]);
        },
        "paymentTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any paid installments for this policy in our system."]);
        },
        "additionalInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any additional insured for this policy in our system."]);
        },
        "mainInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any main insured for this policy in our system."]);
        }
      },
      "tabs": {
        "beneficiaries": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries Information"]);
          },
          "tableColumns": {
            "name": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nome"]);
            },
            "relation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Relation"]);
            },
            "endDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["End Date"]);
            },
            "percentage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentage"]);
            },
            "benefitamount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Valor do benef\xEDcio"]);
            },
            "action": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A\xE7\xE3o"]);
            },
            "idDocument": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de Identifica\xE7\xE3o"]);
            },
            "gender": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["G\xEAnero"]);
            },
            "dob": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Data de Nascimento"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Idade"]);
            },
            "years": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["anos"]);
            }
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiary Details"]);
          },
          "editModal": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Edit Beneficiary"]);
            },
            "messageTitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentages Distributed Correctly!"]);
            },
            "messageTitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Total Percentages should be equal to 100%"]);
            },
            "subtitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentages Total"]);
            },
            "subtitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentage Required"]);
            }
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([" Informa\xE7\xE3o do Benefici\xE1rio"]);
          }
        },
        "coverages": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverages"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverages Information"]);
          },
          "tableColumns": {
            "coverageName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Name"]);
            },
            "planIdentification": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Identification"]);
            },
            "planFee": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Fee"]);
            },
            "coveragePremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Premium"]);
            },
            "benefitAmount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Benefit Amount"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "paymentType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Type"]);
            }
          }
        },
        "payments": {},
        "mainInsured": {},
        "Depentents": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informa\xE7\xE3o do Titular"]);
          },
          "insuredHolder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Segurado Titular"]);
          },
          "IdentificationNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xFAmero de Identifica\xE7\xE3o"]);
          },
          "Dateofbirth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Data de nascimento"]);
          },
          "Age": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Idade"]);
          },
          "Gender": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["G\xEAnero"]);
          },
          "Holder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Titular"]);
          }
        },
        "coverage": {
          "tableColumns": {
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Descri\xE7\xE3o"]);
            },
            "capitalInsured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Capital Segurado"]);
            },
            "netPolicyPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([" Pr\xEAmio L\xEDquido da Ap\xF3lice"]);
            },
            "taxFinancialOperations": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Opera\xE7\xF5es Financeiras Fiscais"]);
            },
            "totalPolicyPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pr\xEAmio Total da Ap\xF3lice"]);
            }
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informa\xE7\xE3o do Cobertura"]);
          }
        },
        "messages": {
          "noData": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sem dados para exibir"]);
          }
        },
        "titular": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informa\xE7\xE3o do Titular"]);
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([" Detalhes do Titular"]);
          }
        },
        "additionalInsured": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informa\xE7\xF5es Adicionais do Segurado"]);
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([" Detalhes Adicionais do Segurado"]);
          }
        },
        "assists": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informa\xE7\xF5es de assist\xEAncia"]);
          },
          "tableColumns": {
            "actions": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A\xE7\xF5es"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Descri\xE7\xE3o"]);
            },
            "limits": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Limites"]);
            }
          }
        },
        "stimulant": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informa\xE7\xE3o de Estimulante"]);
          }
        }
      },
      "modals": {
        "dependent": {
          "idNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xFAmero de Identifica\xE7\xE3o"]);
          },
          "genre": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["G\xEAnero"]);
          },
          "dob": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Data de Nascimento"]);
          },
          "age": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Idade"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Detalle de Dependiente"]);
          }
        }
      },
      "general": {
        "male": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Masculino"]);
        },
        "female": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["F\xEAmea"]);
        },
        "anios": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["anos"]);
        }
      }
    },
    "bra-region": {},
    "reports": {
      "pageTitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["AIG BRA - Relat\xF3rio de Vendas"]);
      },
      "header": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Preencha os campos obrigat\xF3rios"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para poder gerar o relat\xF3rio de vendas, selecione o periodo para consultar e o Sponsor."]);
        },
        "initDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A partir de"]);
        },
        "endDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para"]);
        },
        "selectSponsor": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Selecione um patrocinador"]);
        }
      },
      "emptyData": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sem dados dispon\xEDveis"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para gerar dados, preencha os campos acima."]);
        }
      },
      "tableColumns": {
        "policyAIG": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["AIG Ap\xF3lice"]);
        },
        "campaign": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Campanha"]);
        },
        "certificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Certificado"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nome"]);
        },
        "lastName": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sobrenome"]);
        },
        "id": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["ID N\xFAmero"]);
        },
        "dateOfBirth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data de nascimento"]);
        },
        "emissionDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data de emiss\xE3o"]);
        },
        "Status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Status"]);
        },
        "cancelationDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data de cancelamento"]);
        },
        "cancelationReason": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Motivo do cancelamento"]);
        }
      }
    },
    "users": {
      "list": {
        "pageTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gest\xE3o de Usu\xE1rios "]);
        },
        "tableColumns": {
          "fullname": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nome completo"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nome"]);
          },
          "lastName": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["sobrenome"]);
          },
          "createdBy": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Criado por"]);
          },
          "deactivationDate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Data de desativa\xE7\xE3o"]);
          },
          "deactivationReason": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Motivo de desativa\xE7\xE3o"]);
          },
          "allowedAccess": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Acessos permitidos"]);
          },
          "role": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fun\xE7\xE3o"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["E-mail"]);
          },
          "iniciative": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["iniciativa"]);
          },
          "profile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Perfis"]);
          }
        }
      },
      "create": {
        "pageTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Criar Usu\xE1rio"]);
        },
        "form": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nome"]);
          },
          "lastName": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sobrenome"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["E-mail"]);
          },
          "password": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Senha"]);
          },
          "role": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fun\xE7\xE3o"]);
          },
          "profile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Perfil"]);
          },
          "selectCountry": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Selecione o pais"]);
          },
          "selectRoles": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Selecione pelo menos uma Iniciativa"]);
          }
        }
      }
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Jetzt mitmachen"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Beginnen Sie mit der Erstellung Ihres Kontos"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Erhalten Sie Werbeangebote"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ich habe bereits ein Konto"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrieren"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mailadresse"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Passwort"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Passwort\xFCberpr\xFCfung"]);
        }
      },
      "user": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Modifique os campos que deseja atualizar para este usu\xE1rio."]);
        },
        "sesions": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desculpe, voc\xEA deve fazer login para acessar esta se\xE7\xE3o (Qualquer coisa funcionar\xE1)"]);
        },
        "emails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Erro de autentica\xE7\xE3o. Correio electr\xF3nico ou palavra-passe incorrectos"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ihr Name, Vorname ist erforderlich"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Geben Sie Ihre E-Mail ein, sie wird f\xFCr die Anmeldung ben\xF6tigt"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte geben Sie eine g\xFCltige E-Mail ein"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Geben Sie Ihr Passwort mit mindestens 8 Zeichen ein, es wird f\xFCr die Anmeldung ben\xF6tigt"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Das Passwort sollte mindestens 8 Zeichen enthalten"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Bitte best\xE4tigen Sie Ihr Passwort"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Das Passwort stimmt nicht \xFCberein"]);
          }
        },
        "nocreate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ocorreu um erro, n\xE3o foi poss\xEDvel criar um usu\xE1rio!"]);
        }
      }
    },
    "config": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Contexto"]);
      },
      "ChangePassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Mudar senha"]);
      },
      "text": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Insira uma nova senha que atenda aos par\xE2metros e confirme-a."]);
      },
      "newPassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Nova senha"]);
      },
      "confirmPassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["confirmar senha"]);
      },
      "parameters": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Par\xE2metros:"]);
        },
        "containsLowercase": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A senha deve conter pelo menos uma letra min\xFAscula."]);
        },
        "containsNumber": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A senha deve conter pelo menos um n\xFAmero."]);
        },
        "containsUppercase": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A senha deve conter pelo menos uma letra mai\xFAscula."]);
        },
        "containsSpecial": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A senha deve conter pelo menos um caractere especial."]);
        },
        "characterMin": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A senha deve conter no m\xEDnimo 8 caracteres."]);
        },
        "users": {
          "supervisor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Productos Mastes-Operacao Master"]);
          },
          "visor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Operacoes Call Center-Sinistros-Corretor Emissao"]);
          },
          "emisor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Corretor Master"]);
          }
        }
      }
    },
    "selectAnOption": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione uma op\xE7\xE3o"]);
    },
    "autogestao": {
      "step1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Patrocinador"]);
      },
      "step2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Produto"]);
      },
      "step3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Campanha"]);
      },
      "step4": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Plano"]);
      },
      "step5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Contas e configura\xE7\xF5es"]);
      },
      "summary": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Resumo"]);
      },
      "next": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Pr\xF3ximo"]);
      },
      "before": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Voltar"]);
      },
      "form": {
        "sponsor": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nome"]);
          },
          "code": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["C\xF3digo"]);
          }
        }
      }
    },
    "monitoring": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rastreamento de carga"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Gerar rastreamento"]);
      },
      "sutitleDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sele\xE7\xE3o de data"]);
      },
      "tabs": {
        "records": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registros"]);
        },
        "resume": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Retomar"]);
        }
      },
      "body": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Para consultar os cadastros, primeiro escolha o estado e a data desejada."]);
      },
      "bodyDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Para consultar o resumo, escolha primeiro a data pretendida."]);
      },
      "optionStates": {
        "noProccess": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["N\xE3o processado"]);
        },
        "proccess": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Processado"]);
        },
        "fails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fracassado"]);
        }
      },
      "columnsTitle": {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Grupo"]);
        },
        "branch": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Marca"]);
        },
        "id_number": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["N\xFAmero do bilhete e/ou certificado"]);
        },
        "rate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["tipo de taxa"]);
        },
        "last_name_1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sobrenome paterno"]);
        },
        "last_name_2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sobrenome materno"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nome"]);
        },
        "premium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Pr\xEAmio total"]);
        },
        "sale_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data de venda"]);
        },
        "ride_start_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data e hora de in\xEDcio da viagem"]);
        },
        "ride_end_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data e hora do fim da viagem"]);
        },
        "address_1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Origem da viagem"]);
        },
        "address_2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Destino del viaje"]);
        },
        "user_branch": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Canal de vendas"]);
        },
        "transac_type": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tipo de transa\xE7\xE3o"]);
        },
        "boarding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Aproxima\xE7\xE3o"]);
        },
        "transac_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Data de envio da transa\xE7\xE3o"]);
        },
        "file_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nome do arquivo"]);
        },
        "state": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["State"]);
        }
      }
    }
  },
  "en": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select Language"]);
    },
    "login": {
      "login-welcome": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Welcome"]);
      },
      "login-initSesion": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sign in"]);
      },
      "login-email": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["E-mail"]);
      },
      "login-password": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Password"]);
      },
      "login-forgot": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["I forgot my password"]);
      },
      "login-remember": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Remember password"]);
      },
      "login-go": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sign In"]);
      }
    },
    "dashboard": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Welcome"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["We are very happy to see it again."]);
      },
      "options": {
        "today": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Today"]);
        },
        "yesterday": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Yesterday"]);
        },
        "last_7_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last 7 days"]);
        },
        "last_30_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last 30 days"]);
        },
        "last_90_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last 90 days"]);
        },
        "last_month": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last month"]);
        },
        "last_year": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last year"]);
        },
        "week_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Week to date"]);
        },
        "month_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Month to date"]);
        },
        "year_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Year to date"]);
        },
        "currentMonth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Current Month"]);
        },
        "lastSemester": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last 6 Months"]);
        }
      },
      "labels": {
        "products": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Products"]);
        },
        "totalActivePolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total Active Policies"]);
        },
        "totalSoldPolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total Sold Policies"]);
        },
        "totalCanceledPolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total Canceled Policies"]);
        },
        "ageAverage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Average Age"]);
        },
        "region": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Country"]);
        },
        "created": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Created"]);
        },
        "status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Status"]);
        },
        "active": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Active"]);
        },
        "inactive": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Inactive"]);
        },
        "totalActivePremium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total Premium"]);
        },
        "totalCanceledPremium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total Canceled Premium"]);
        },
        "total": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total"]);
        },
        "manualRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Custom range"]);
        },
        "yes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Yes"]);
        },
        "selectRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Predefined ranges"]);
        },
        "no": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No"]);
        },
        "dateRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date range to consult"]);
        },
        "policynotexist": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Policy does not exist"]);
        }
      }
    },
    "sidebar": {
      "titles": {
        "home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home"]);
        },
        "policies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Policies"]);
        },
        "reports": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reports"]);
        },
        "users": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Users"]);
        },
        "dashboardd": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Dashboards"]);
        },
        "tracing": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tracing"]);
        }
      },
      "subItems": {
        "policyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Policy"]);
        },
        "historyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Historical"]);
        },
        "productsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Products"]);
        },
        "paymentsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Payments"]);
        },
        "reportsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Reports"]);
        },
        "userManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["User Management"]);
        },
        "PolicyDetail": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Insurance list"]);
        },
        "InsuredConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Insured"]);
        },
        "saleGeneration": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generate Sale"]);
        },
        "loadManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Load Management"]);
        },
        "paymentConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Payments"]);
        },
        "paymentDetail": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Payment Detail"]);
        },
        "tracingFileLoad": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["File Uploads"]);
        },
        "novo": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["new"]);
        },
        "autogestaoTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Self management system"]);
        },
        "summary": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Summary"]);
        },
        "reports": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reports"]);
        },
        "reportsConsultClosedTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\nClosed Shifts"]);
        },
        "reportsConsultClosedTurnedTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Closed Turns"]);
        },
        "reportsConsultTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Closing Turns"]);
        }
      },
      "profileDropdown": {
        "logout": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Log Out"]);
        }
      }
    },
    "utils": {
      "vuegoodtable": {
        "config": {
          "rowsPerPage": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Rows Per Page"]);
          },
          "of": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Of"]);
          },
          "previous": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Previous"]);
          },
          "next": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Next"]);
          },
          "search": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Search Table"]);
          },
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["All"]);
          }
        },
        "columns": {
          "PolicyNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Policy Number"]);
          },
          "discountMethod": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Discount Method"]);
          },
          "Plan": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Plan"]);
          },
          "Award": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Premium"]);
          },
          "productId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Product Id"]);
          },
          "userBranch": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sucursal SAP"]);
          },
          "StartValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Start of validity"]);
          },
          "EndValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["End of validity"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Full Name"]);
          },
          "type": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tipo de Seguro"]);
          },
          "policy": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Policy AIG"]);
          },
          "status": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Status"]);
          },
          "action": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Action"]);
          },
          "PurchaseId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Purchase Id"]);
          },
          "PatientId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Id Paciente"]);
          },
          "CustomerId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Id Cliente"]);
          },
          "statusUello": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Active"]);
            },
            "expired": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expired"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelled"]);
            }
          },
          "statusReport": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Active"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelled"]);
            }
          },
          "statusminimeds": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Active"]);
            },
            "question": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["In question"]);
            },
            "emited": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Issued"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelled"]);
            },
            "slope": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Slope"]);
            }
          },
          "statusUser": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Active"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Inactive"]);
            },
            "inactive": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["INACTIVE"]);
            }
          },
          "pagamento": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Payment Method"]);
          },
          "statusminimed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Status"]);
          },
          "iniciovigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Start of validity"]);
          },
          "fimvigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["End of Validity"]);
          },
          "flebotomista": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Flebotomista"]);
          },
          "paymentReference": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Payment Reference"]);
          },
          "paidAmount": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Paid Amount"]);
          },
          "paymentResult": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Payment Result"]);
          },
          "paymentDate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Payment Date"]);
          },
          "cardType": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Card Type"]);
          },
          "cardNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Card Number"]);
          },
          "statusFederacion": {
            "rejected": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Rejected"]);
            },
            "approve": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Approve"]);
            }
          },
          "pagamentoForm": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Payment method"]);
          }
        }
      },
      "buttons": {
        "consult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult"]);
        },
        "goBack": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Go Back"]);
        },
        "createUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Create User"]);
        },
        "generateReport": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generate Report"]);
        },
        "generateCertificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generate Certificate"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["See Details"]);
        },
        "downloadCertificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Certificate"]);
        },
        "downloadAcuse": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Acuse"]);
        },
        "downloadCaratula": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Caratula"]);
        },
        "update": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Update"]);
        },
        "cancel": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel"]);
        },
        "ExportCSV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Export Excel"]);
        }
      },
      "headerCards": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select a date range"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To be able to consult policies, first pick the desire date range."]);
        },
        "titleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select preferred filter"]);
        },
        "subtitleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To be able to consult policies, first pick one of the available filters."]);
        },
        "switchLabel1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date Range"]);
        },
        "switchLabel2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quick Search"]);
        },
        "detailsCards": {
          "currentQuote": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Current Quote Information"]);
            },
            "contractorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Contractor Name"]);
            },
            "documentNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document Number"]);
            },
            "transactionType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Transaction Type"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Names"]);
            },
            "lastNames": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Last Names"]);
            },
            "document": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document"]);
            },
            "fullname": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fullname"]);
            },
            "sponsorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sponsor Name"]);
            }
          },
          "selectedProduct": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Selected Product"]);
            },
            "campaignCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campaign Code"]);
            },
            "productCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Product"]);
            },
            "coverageCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["CoverageCode"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["VAT"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Net Premium"]);
            },
            "paidPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Paid Premium"]);
            }
          },
          "paymentInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Information"]);
            },
            "accountType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Account Type"]);
            },
            "cardNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Card Number"]);
            },
            "frequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Frequency"]);
            },
            "cycleDay": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cycle Day"]);
            },
            "accountName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Account Name"]);
            },
            "expiredMonth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expired Month"]);
            },
            "expiredYear": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expired Year"]);
            },
            "cardType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Card Type"]);
            },
            "nsu": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["NSU"]);
            },
            "aprovalcode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Approval Code"]);
            },
            "paymentFrequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Frequency"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "monthly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mensal"]);
            },
            "Annual": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Anual"]);
            },
            "titleV2": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Bill Information"]);
            }
          },
          "QuoteInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Quote Information"]);
            },
            "certificateNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Certificate Number"]);
            },
            "status": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Status"]);
            },
            "planCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Code"]);
            },
            "storeName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Store Name"]);
            },
            "effectiveDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Effective Date"]);
            },
            "movementDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Movement Date"]);
            },
            "renewalDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Renewal Date"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Policy Number"]);
            },
            "plan": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan"]);
            },
            "campaign": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campaign"]);
            },
            "premium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Premium"]);
            },
            "premiumch": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Premium"]);
            },
            "comision": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Commission"]);
            }
          },
          "generalClientInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["General Client Information"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Names"]);
            },
            "firstLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["First Last Name"]);
            },
            "secondLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Second Last Name"]);
            },
            "sex": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Genre"]);
            },
            "dateOfBirth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Date of Birth"]);
            },
            "datef2m": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Date of emition f2m"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Age"]);
            },
            "ocupation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ocupation"]);
            },
            "beneficiary": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Beneficiary"]);
            },
            "insured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Insured"]);
            },
            "principalInsured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Principal Insured"]);
            },
            "insuranceType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Insurance Type"]);
            }
          },
          "locationInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Location Information"]);
            },
            "streetAndNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Street and Number"]);
            },
            "typehousing": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Type Housing"]);
            },
            "colony": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Neighborhood"]);
            },
            "department": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Municipio"]);
            },
            "city": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["City"]);
            },
            "state": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["State"]);
            },
            "zipCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zip Code"]);
            },
            "country": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Country"]);
            },
            "barrio": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Neighborhood"]);
            },
            "address": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Address"]);
            }
          },
          "contactInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informa\xE7\xE3o de contato"]);
            },
            "mobilePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["M\xF3vel"]);
            },
            "officePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Telefone residencial"]);
            },
            "email": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Email"]);
            },
            "code": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Code"]);
            },
            "postalCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Postal Code"]);
            }
          },
          "InformationPolicy": {
            "title1": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Policy Detail"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Current Policy Data"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Full Name"]);
            },
            "napolice": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Certicate Number"]);
            },
            "typeId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ID type"]);
            },
            "master_policy": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["No. Ap\xF3lice Master AIG"]);
            },
            "datenow": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Date and time of issue"]);
            },
            "typestart": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Validity Type"]);
            },
            "identificationNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Identification Number"]);
            },
            "titlepolicy": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Policy Information"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Policy Number"]);
            },
            "startofalidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Start of Validity"]);
            },
            "endofalidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["End of Validity"]);
            },
            "PlanId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan"]);
            },
            "typecoverage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Type"]);
            },
            "phlebotomist": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Phlebotomist"]);
            },
            "SAPCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["SAP Code"]);
            },
            "purchaseId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Purchase ID"]);
            },
            "patitentId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Patient ID"]);
            },
            "endValidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Until At"]);
            },
            "typetransaction": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Type of Transaction"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Net Premium"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["IVA"]);
            },
            "Awardfull": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Total Premium"]);
            },
            "CustomerId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Customer Id"]);
            }
          }
        }
      },
      "tooltips": {
        "deactivateUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Deactivate User"]);
        },
        "deleteUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Delete User"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["See Details"]);
        },
        "cancelPolicy": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel Policy"]);
        },
        "editBeneficiary": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Edit Beneficiary"]);
        }
      },
      "notifMessages": {
        "reportWarning": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We could not find any policy"]);
        }
      },
      "sweetAlertMessages": {},
      "emptyDataPlaceholders": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No Available Data"]);
        },
        "paymentTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any paid installments for this policy in our system."]);
        },
        "additionalInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any additional insured for this policy in our system."]);
        },
        "mainInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any main insured for this policy in our system."]);
        }
      },
      "tabs": {
        "beneficiaries": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries Information"]);
          },
          "tableColumns": {
            "name": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Name"]);
            },
            "relation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Relation"]);
            },
            "endDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["End Date"]);
            },
            "percentage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentage"]);
            },
            "benefitamount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Benefit amount"]);
            },
            "action": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Action"]);
            },
            "idDocument": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document Id"]);
            },
            "gender": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Gender"]);
            },
            "dob": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Date of Birth"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Age"]);
            },
            "years": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["years"]);
            }
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiary Details"]);
          },
          "editModal": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Edit Beneficiary"]);
            },
            "messageTitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentages Distributed Correctly!"]);
            },
            "messageTitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Total Percentages should be equal to 100%"]);
            },
            "subtitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentages Total"]);
            },
            "subtitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentage Required"]);
            }
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries Information"]);
          }
        },
        "coverages": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverages"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverages Information"]);
          },
          "tableColumns": {
            "coverageName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Name"]);
            },
            "planIdentification": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Identification"]);
            },
            "planFee": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Fee"]);
            },
            "coveragePremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Premium"]);
            },
            "benefitAmount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Benefit Amount"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "paymentType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Type"]);
            }
          }
        },
        "payments": {},
        "additionalInsured": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Additional Insured Information"]);
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Additional Insured Details"]);
          }
        },
        "mainInsured": {},
        "Depentents": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Holder Information"]);
          },
          "insuredHolder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Insured Holder"]);
          },
          "IdentificationNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Identification Number"]);
          },
          "Dateofbirth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Date of birth"]);
          },
          "Age": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Age"]);
          },
          "Gender": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Gender"]);
          },
          "Holder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Holder"]);
          }
        },
        "coverage": {
          "tableColumns": {
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Description"]);
            },
            "capitalInsured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Capital Insured"]);
            },
            "netPolicyPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Net Policy Premium"]);
            },
            "taxFinancialOperations": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tax Financial Operations"]);
            },
            "totalPolicyPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Total Policy Premium"]);
            }
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverage Information"]);
          }
        },
        "messages": {
          "noData": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["There is no data to display"]);
          }
        },
        "titular": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Holder Information"]);
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Holder Details"]);
          }
        },
        "assists": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Assists Information"]);
          },
          "tableColumns": {
            "actions": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Actions"]);
            },
            "limits": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Limits"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Description"]);
            }
          }
        },
        "stimulant": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Stimulant Information"]);
          }
        }
      },
      "modals": {
        "dependent": {
          "idNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ID Number"]);
          },
          "genre": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Genre"]);
          },
          "dob": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Date of Birth"]);
          },
          "age": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Age"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Dependent Details"]);
          }
        }
      },
      "general": {
        "male": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Male"]);
        },
        "female": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Female"]);
        },
        "anios": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["years"]);
        }
      }
    },
    "reports": {
      "pageTitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["AIG BRA - Sales Report"]);
      },
      "header": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Complete the required fields"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To be able to generate the sales report, select a date range and a sponsor."]);
        },
        "initDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["From"]);
        },
        "endDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To"]);
        },
        "selectSponsor": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select a Sponsor"]);
        }
      },
      "emptyData": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No Available Data"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To generate data, please complete the fields above."]);
        },
        "subtitle1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We could not find the policy you are looking for, contact support!"]);
        }
      },
      "tableColumns": {
        "policyAIG": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["AIG Policy"]);
        },
        "campaign": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Campaign"]);
        },
        "certificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Certificate"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "lastName": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last Name"]);
        },
        "id": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["ID Number"]);
        },
        "dateOfBirth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date of Birth"]);
        },
        "emissionDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Emission Date"]);
        },
        "Status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Status"]);
        },
        "cancelationDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelation Date"]);
        },
        "cancelationReason": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelation Reason"]);
        }
      }
    },
    "users": {
      "list": {
        "pageTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["User Management"]);
        },
        "tableColumns": {
          "fullname": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Full Name"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Name"]);
          },
          "lastName": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Last Name"]);
          },
          "createdBy": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Created By"]);
          },
          "deactivationDate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Deactivation Date"]);
          },
          "deactivationReason": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Deactivation Reason"]);
          },
          "allowedAccess": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Allowed Access"]);
          },
          "role": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Role"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Email"]);
          },
          "iniciative": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["iniciative"]);
          },
          "profile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Profiles"]);
          }
        }
      },
      "create": {
        "pageTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Create User"]);
        },
        "form": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Name"]);
          },
          "lastName": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Last Name"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Email"]);
          },
          "password": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Password"]);
          },
          "role": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Role"]);
          },
          "profile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Profile"]);
          },
          "selectCountry": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Select Country"]);
          },
          "selectRoles": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Select at least one Iniciative"]);
          }
        }
      }
    },
    "bra-region": {},
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Join Us Now."]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Start by creating your account"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Receive promotional offers"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["I already have an account"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sign Up"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Email Address"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Password"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Password Verification"]);
        }
      },
      "user": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Modify the fields you want to update for this user."]);
        },
        "sesions": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sorry, you should loggin to access this section (anything will work)"]);
        },
        "emails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Authentication error. Incorrect e-mail or password"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Your name first name is required"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enter your email, it will be required to login"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Please, enter a valid email"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Enter your password with at least 8 characters, it will be required to login"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["The password should contains at leat 8 characters"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Please, confirm your password"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["The password does not match"]);
          }
        },
        "user": {
          "nocreate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["An error occurred, could not create a user!"]);
          }
        }
      }
    },
    "config": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Setting"]);
      },
      "ChangePassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Change password"]);
      },
      "text": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Enter a new password that meets the parameters and confirm it."]);
      },
      "newPassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["New password"]);
      },
      "confirmPassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Confirm password"]);
      },
      "parameters": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Parameters:"]);
        },
        "containsLowercase": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The password must contain at least one lowercase letter."]);
        },
        "containsNumber": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The password must contain at least one number."]);
        },
        "containsUppercase": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The password should contain at least 1 uppercase character."]);
        },
        "containsSpecial": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The password must contain at least one special character."]);
        },
        "characterMin": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The password must contain at least 8 characters."]);
        },
        "users": {
          "supervisor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Supervisor"]);
          },
          "visor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Consulta"]);
          },
          "emisor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Consulta y Emisor"]);
          }
        }
      }
    },
    "selectAnOption": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Select an option"]);
    },
    "autogestao": {
      "step1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Sponsor"]);
      },
      "step2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Product"]);
      },
      "step3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Campaign"]);
      },
      "step4": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Plan"]);
      },
      "step5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Accounts and settings"]);
      },
      "summary": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Summary"]);
      },
      "next": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Next"]);
      },
      "before": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Back"]);
      },
      "form": {
        "sponsor": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Name"]);
          },
          "code": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Code"]);
          }
        }
      }
    },
    "summary": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cargo Summary"]);
      },
      "message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["The consultation may take a while!"]);
      }
    },
    "monitoring": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cargo Tracing"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Generate tracing"]);
      },
      "sutitleDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Date selection"]);
      },
      "tabs": {
        "records": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Records"]);
        },
        "resume": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Resume"]);
        }
      },
      "body": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["To consult the records, first choose the state and the desired date."]);
      },
      "bodyDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["To consult the summary, first choose the desired date."]);
      },
      "optionStates": {
        "noProccess": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Not processed"]);
        },
        "proccess": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Processed"]);
        },
        "fails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Failed"]);
        }
      },
      "columnsTitle": {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Group"]);
        },
        "branch": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Branch"]);
        },
        "id_number": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ticket and/or certificate number"]);
        },
        "rate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rate type"]);
        },
        "last_name_1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Last name"]);
        },
        "last_name_2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mother's last name"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Name"]);
        },
        "premium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total premium"]);
        },
        "sale_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sale date"]);
        },
        "ride_start_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Trip start date and time"]);
        },
        "ride_end_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date and time of the end of the trip"]);
        },
        "address_1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Origin of the trip"]);
        },
        "address_2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["travel destination"]);
        },
        "user_branch": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sales channel"]);
        },
        "transac_type": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Transaction Type"]);
        },
        "boarding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Approach"]);
        },
        "transac_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Transaction submission date"]);
        },
        "file_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["File name"]);
        },
        "state": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["State"]);
        }
      }
    },
    "details": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Details"]);
    },
    "successful": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Successful"]);
    },
    "notProcessed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Not Processed"]);
    },
    "failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Failed"]);
    },
    "consult": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Consult"]);
    },
    "all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["All"]);
    }
  },
  "es-MX": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione el idioma"]);
    },
    "login": {
      "login-welcome": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Bienvenido"]);
      },
      "login-initSesion": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Iniciar sesi\xF3n"]);
      },
      "login-email": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Correo"]);
      },
      "login-password": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Contrase\xF1a"]);
      },
      "login-forgot": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Olvid\xE9 mi contrase\xF1a"]);
      },
      "login-remember": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Recordar contrase\xF1a"]);
      },
      "login-go": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Entrar"]);
      }
    },
    "dashboard": {
      "title": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
        return _normalize(["Bienvenid", _interpolate(_named("add"))]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
        return _normalize(["Estamos muy contentos de volver a verl", _interpolate(_named("add")), "."]);
      },
      "options": {
        "today": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hoy"]);
        },
        "yesterday": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ayer"]);
        },
        "last_7_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 7 d\xEDas"]);
        },
        "last_30_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 30 d\xEDas"]);
        },
        "last_90_days": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 90 d\xEDas"]);
        },
        "last_month": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mes pasado"]);
        },
        "last_year": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["A\xF1o pasado"]);
        },
        "week_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltima semana hasta la fecha"]);
        },
        "month_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimo mes hasta la fecha"]);
        },
        "year_to_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimo a\xF1o hasta la fecha"]);
        },
        "currentMonth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mes Actual"]);
        },
        "lastSemester": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 6 meses"]);
        }
      },
      "labels": {
        "products": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Productos"]);
        },
        "totalActivePolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total P\xF3lizas Activas"]);
        },
        "totalSoldPolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total P\xF3lizas Vendidas"]);
        },
        "totalCanceledPolicies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total de P\xF3lizas Canceladas"]);
        },
        "ageAverage": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Edad Promedio"]);
        },
        "region": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Regi\xF3n"]);
        },
        "created": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Creado"]);
        },
        "status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Estado"]);
        },
        "active": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Activo"]);
        },
        "inactive": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Inactivo"]);
        },
        "totalActivePremium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Monto Prima"]);
        },
        "totalCanceledPremium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Monto Cancelado"]);
        },
        "total": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Total"]);
        },
        "manualRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rango personalizado?"]);
        },
        "yes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Si"]);
        },
        "selectRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rangos Predefinidos"]);
        },
        "no": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No"]);
        },
        "dateRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rango de fechas a consultar"]);
        },
        "policynotexist": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Poliza no existe"]);
        }
      }
    },
    "sidebar": {
      "titles": {
        "home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Inicio"]);
        },
        "policies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["P\xF3lizas"]);
        },
        "reports": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reportes"]);
        },
        "users": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Usuarios"]);
        },
        "dashboardd": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Dashboards"]);
        },
        "tracing": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Monitoreo"]);
        }
      },
      "subItems": {
        "policyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta de P\xF3lizas"]);
        },
        "historyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta Hist\xF3rico"]);
        },
        "productsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta Productos"]);
        },
        "paymentsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta Pagos"]);
        },
        "reportsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta Reportes"]);
        },
        "userManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gesti\xF3n Usuarios"]);
        },
        "PolicyDetail": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Lista de Seguros"]);
        },
        "InsuredConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta Asegurado"]);
        },
        "saleGeneration": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generar Venta"]);
        },
        "loadManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gestion De Carga"]);
        },
        "paymentConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta de Pagos"]);
        },
        "paymentDetail": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Detalle de Pago"]);
        },
        "tracingFileLoad": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Carga de Archivos"]);
        },
        "novo": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nuevo"]);
        },
        "autogestaoTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sistema de Autogesti\xF3n"]);
        },
        "summary": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Resumen"]);
        },
        "reports": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reporte"]);
        },
        "reportsConsultClosedTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Venta de Turnos"]);
        },
        "reportsConsultTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cierre de Turnos"]);
        }
      },
      "profileDropdown": {
        "logout": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Salir"]);
        }
      }
    },
    "utils": {
      "vuegoodtable": {
        "config": {
          "rowsPerPage": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Filas por P\xE1gina"]);
          },
          "of": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["de"]);
          },
          "previous": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Antes"]);
          },
          "next": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Siguiente"]);
          },
          "search": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Buscar Tabla"]);
          },
          "all": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Todas"]);
          }
        },
        "columns": {
          "PolicyNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xFAmero de P\xF3liza"]);
          },
          "discountMethod": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tipo de Transacci\xF3n"]);
          },
          "Plan": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Plan"]);
          },
          "Award": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Prima"]);
          },
          "productId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Id del Producto"]);
          },
          "userBranch": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Sucursal SAP"]);
          },
          "StartValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Inicio de Vigencia"]);
          },
          "EndValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fin de Vigencia"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nombre Completo"]);
          },
          "type": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tipo de Seguro"]);
          },
          "policy": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Poliza AIG"]);
          },
          "status": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Estado"]);
          },
          "action": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Acci\xF3n"]);
          },
          "PurchaseId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ID Compra"]);
          },
          "PatientId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ID Paciente"]);
          },
          "statusUello": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Activo"]);
            },
            "expired": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expirado"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelado"]);
            }
          },
          "statusReport": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Activo"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelado"]);
            }
          },
          "statusminimeds": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Activo"]);
            },
            "question": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["En Cuestion"]);
            },
            "emited": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Emitido"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelado"]);
            },
            "slope": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pendiente"]);
            }
          },
          "statusUser": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ACTIVO"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Inactivo"]);
            },
            "inactive": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["INACTIVO"]);
            }
          },
          "pagamento": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Forma de Pago"]);
          },
          "statusminimed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Estado"]);
          },
          "iniciovigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Inicio de Vigencia"]);
          },
          "fimvigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fin de Vigencia"]);
          },
          "flebotomista": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Flebotomista"]);
          },
          "pagamentoForm": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["M\xE9todo de Pago"]);
          },
          "paymentReference": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Referencia de Pago"]);
          },
          "paidAmount": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Monto Pagado"]);
          },
          "paymentResult": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Respuesta de Pago"]);
          },
          "paymentDate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fecha de Pago"]);
          },
          "cardType": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tipo de Tarjeta"]);
          },
          "cardNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xFAmero de Tarjeta"]);
          },
          "statusfed": {
            "approve": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aprobado"]);
            }
          },
          "statusFederacion": {
            "approve": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Aprobado"]);
            },
            "rejected": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Rechazado"]);
            }
          }
        }
      },
      "buttons": {
        "consult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consultar"]);
        },
        "goBack": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Regresar"]);
        },
        "createUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Agregar Usuario"]);
        },
        "generateReport": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generar Reporte"]);
        },
        "generateCertificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generar Certificado"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ve Detalles"]);
        },
        "downloadCertificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Descargar Certificado"]);
        },
        "downloadAcuse": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Descargar Acuse"]);
        },
        "downloadCaratula": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Descargar Caratula"]);
        },
        "update": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Actualizar"]);
        },
        "cancel": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelado"]);
        },
        "ExportCSV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Exportar Excel"]);
        }
      },
      "headerCards": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Filtro de rango de Fecha"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para poder filtrar las p\xF3lizas, primero escoja el rango de fecha deseado"]);
        },
        "titleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select preferred filter"]);
        },
        "subtitleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para poder consultar las polizas, primero elija uno de los filtros disponibles"]);
        },
        "switchLabel1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Intervalo de Fechas"]);
        },
        "switchLabel2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Busqueda Rapida"]);
        },
        "detailsCards": {
          "currentQuote": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de cotizaci\xF3n actual"]);
            },
            "contractorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre de Contratista"]);
            },
            "documentNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Numero de Documento"]);
            },
            "transactionType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Transacci\xF3n"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombres"]);
            },
            "lastNames": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Apellidos"]);
            },
            "document": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Documento"]);
            },
            "fullname": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre Completo"]);
            },
            "sponsorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre de Sponsor"]);
            }
          },
          "selectedProduct": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Producto Seleccionado"]);
            },
            "campaignCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Codigo de Campa\xF1a"]);
            },
            "productCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Producto"]);
            },
            "coverageCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Codigo de Cobertura"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["IVA"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Neta"]);
            },
            "paidPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Pagada"]);
            }
          },
          "paymentInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Pago"]);
            },
            "accountType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Cuenta"]);
            },
            "cardNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de tarjeta"]);
            },
            "frequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Frecuencia"]);
            },
            "cycleDay": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["D\xEDa de Ciclo"]);
            },
            "nsu": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["NSU"]);
            },
            "aprovalcode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Codigo de Aprobacion"]);
            },
            "accountName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre de la cuenta"]);
            },
            "expiredMonth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mes de Vencimiento"]);
            },
            "expiredYear": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A\xF1o de Vencimiento"]);
            },
            "cardType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Tarjeta"]);
            },
            "paymentFrequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Frecuencia de Pago"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Metodo de Pago"]);
            },
            "monthly": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mensal"]);
            },
            "Annual": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Anual"]);
            },
            "policyRights": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Derechos de P\xF3liza"]);
            },
            "titleV2": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Recibo"]);
            }
          },
          "QuoteInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Cotizaci\xF3n"]);
            },
            "certificateNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de Certificado"]);
            },
            "status": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Estado"]);
            },
            "planCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Codigo del plan"]);
            },
            "storeName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre de la Tienda"]);
            },
            "effectiveDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha de Entrega "]);
            },
            "movementDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha de Movimiento"]);
            },
            "renewalDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha de Renovaci\xF3n"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Metodo de Pago"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de P\xF3liza"]);
            },
            "plan": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan"]);
            },
            "campaign": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campa\xF1a"]);
            },
            "premium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima"]);
            },
            "premiumch": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Premio"]);
            },
            "premiumTotal": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Total"]);
            },
            "comision": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Comisi\xF3n"]);
            }
          },
          "generalClientInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n General del Cliente"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombres"]);
            },
            "firstLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Primer Apellido"]);
            },
            "secondLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Secundo Apellido"]);
            },
            "sex": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Genero"]);
            },
            "dateOfBirth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha de Nacimiento"]);
            },
            "datef2m": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha de emision f2m"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["A\xF1os"]);
            },
            "ocupation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ocupacion"]);
            },
            "beneficiary": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Beneficiario"]);
            },
            "insured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Asegurado"]);
            },
            "principalInsured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Asegurado Principal"]);
            },
            "insuranceType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Seguro"]);
            }
          },
          "locationInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Ubicaci\xF3n"]);
            },
            "streetAndNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Calle y N\xFAmero"]);
            },
            "typehousing": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Vivienda"]);
            },
            "colony": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Colonia"]);
            },
            "department": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Municipio"]);
            },
            "city": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ciudad"]);
            },
            "state": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Provincia"]);
            },
            "zipCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Codigo Postal"]);
            },
            "country": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Pa\xEDs"]);
            },
            "barrio": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Barrio"]);
            },
            "address": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Direcci\xF3n"]);
            }
          },
          "contactInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Contacto"]);
            },
            "mobilePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Telefono M\xF3vil"]);
            },
            "officePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Telefono de Trabajo"]);
            },
            "email": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Email"]);
            },
            "code": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo"]);
            },
            "postalCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo Postal"]);
            }
          },
          "InformationPolicy": {
            "title1": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Detalle de Certificado"]);
            },
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Datos de Poliza Actual"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre completo"]);
            },
            "napolice": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["No. Certificado"]);
            },
            "master_policy": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["No. Ap\xF3lice Master AIG"]);
            },
            "datenow": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha y Hora de Emisi\xF3n"]);
            },
            "typestart": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Vigencia"]);
            },
            "typeId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de ID"]);
            },
            "identificationNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de Identificaci\xF3n"]);
            },
            "titlepolicy": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Poliza"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de P\xF3liza"]);
            },
            "startofalidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Inicio de Vigencia"]);
            },
            "endofalidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fin de Vigencia"]);
            },
            "PlanId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan"]);
            },
            "typecoverage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Cobertura"]);
            },
            "phlebotomist": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Flebotomista"]);
            },
            "SAPCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["C\xF3digo SAP"]);
            },
            "purchaseId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ID Compra"]);
            },
            "patitentId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ID Paciente"]);
            },
            "company": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Empresa"]);
            },
            "endValidity": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fin de Vigencia"]);
            },
            "livingPlace": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Vivienda"]);
            },
            "currency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Moneda"]);
            },
            "secureAmount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Suma Asegurada"]);
            },
            "name": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre"]);
            },
            "riskAddress": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Direcci\xF3n de Riesgo"]);
            },
            "typetransaction": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Type of Transaction"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Neta"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["IVA"]);
            },
            "Awardfull": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Total"]);
            },
            "CustomerId": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["ID Cliente"]);
            }
          }
        }
      },
      "tooltips": {
        "deactivateUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desactivar Usuario"]);
        },
        "deleteUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Eliminar Usuario"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ver Detalles"]);
        },
        "cancelPolicy": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancelar Poliza"]);
        },
        "editBeneficiary": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Editar Beneficiario"]);
        }
      },
      "notifMessages": {
        "reportWarning": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xA1No encontramos ninguna p\xF3liza!"]);
        }
      },
      "sweetAlertMessages": {},
      "emptyDataPlaceholders": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No hay datos Disponibles"]);
        },
        "paymentTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No se ha encontrado ninguna cuota pagada para esta p\xF3liza en nuestro Sistema."]);
        },
        "additionalInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "mainInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No se ha encontrado ningun Asegurado adicional para esta p\xF3liza en nuestro Sistema,"]);
        }
      },
      "tabs": {
        "beneficiaries": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiarios"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Beneficiarios"]);
          },
          "tableColumns": {
            "name": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre"]);
            },
            "relation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Relaci\xF3n"]);
            },
            "endDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha Final"]);
            },
            "percentage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Porcentaje"]);
            },
            "benefitamount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Monto del Beneficio"]);
            },
            "action": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Accion"]);
            },
            "idDocument": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["N\xFAmero de Identificaci\xF3n"]);
            },
            "gender": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["G\xE9nero"]);
            },
            "dob": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fecha de Nacimiento"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Edad"]);
            },
            "years": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["a\xF1os"]);
            }
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Detalle de Beneficiarios"]);
          },
          "editModal": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Editar Beneficiario"]);
            },
            "messageTitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Porcentajes distribuidos Correctamente"]);
            },
            "messageTitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Los porcentajes totales deben ser iguales al 100%"]);
            },
            "subtitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Total de Porcentajes"]);
            },
            "subtitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentaje Requerido"]);
            }
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Beneficiarios"]);
          }
        },
        "coverages": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coberturas"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Coberturas"]);
          },
          "tableColumns": {
            "coverageName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Nombre de la Cobertura"]);
            },
            "planIdentification": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Identificaci\xF3n del Plan"]);
            },
            "planFee": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tarifa del plan"]);
            },
            "coveragePremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima de cobertura"]);
            },
            "benefitAmount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Monto del beneficiario"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Metodo de Pago"]);
            },
            "paymentType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Tipo de Pago"]);
            }
          }
        },
        "payments": {},
        "mainInsured": {},
        "Depentents": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Titular"]);
          },
          "insuredHolder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Titular Asegurado"]);
          },
          "IdentificationNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Numero de Identificaci\xF3n"]);
          },
          "Dateofbirth": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fecha de Nacimiento"]);
          },
          "Age": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Edad"]);
          },
          "Gender": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Genero"]);
          },
          "Holder": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Titular"]);
          }
        },
        "coverage": {
          "tableColumns": {
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Descripci\xF3n"]);
            },
            "capitalInsured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Capital Asegurado"]);
            },
            "netPolicyPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Neta de la P\xF3liza"]);
            },
            "taxFinancialOperations": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Operaciones Financieras Fiscales"]);
            },
            "totalPolicyPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize([" Prima Total de la P\xF3liza"]);
            }
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Cobertura"]);
          }
        },
        "messages": {
          "noData": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([" No hay datos para mostrar"]);
          }
        },
        "titular": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Titular"]);
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Titular"]);
          }
        },
        "additionalInsured": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Asegurados Adicionales"]);
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Detalles de Asegurado Adicional"]);
          }
        },
        "assists": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize([" Informaci\xF3n de asistencias"]);
          },
          "tableColumns": {
            "actions": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Acciones"]);
            },
            "description": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Descripci\xF3n"]);
            },
            "limits": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Limites"]);
            }
          }
        },
        "stimulant": {
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Informaci\xF3n de Estimulante"]);
          }
        }
      },
      "modals": {
        "dependent": {
          "idNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Identificaci\xF3n"]);
          },
          "genre": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["G\xE9nero"]);
          },
          "dob": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fecha de Nacimiento"]);
          },
          "age": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Edad"]);
          },
          "title": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Detalle de Dependiente"]);
          }
        }
      },
      "general": {
        "male": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Masculino"]);
        },
        "female": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Femenino"]);
        },
        "anios": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["a\xF1os"]);
        }
      }
    },
    "reports": {
      "pageTitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["AIG BRA - Reporte de Ventas"]);
      },
      "header": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Complete los campos requeridos"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para generar el reporte de ventas, seleccione un rango de fecha y un sponsor."]);
        },
        "initDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Desde"]);
        },
        "endDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hasta"]);
        },
        "selectSponsor": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Seleccione un sponsor"]);
        }
      },
      "emptyData": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No Hay Datos Disponibles"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Para generar datos, complete los campos de arriba."]);
        },
        "subtitle1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No pudimos encontrar la poliza que buscas, contacta a soporte!."]);
        }
      },
      "tableColumns": {
        "policyAIG": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["# P\xF3liza AIG"]);
        },
        "campaign": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Campa\xF1a"]);
        },
        "certificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Certificado"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "lastName": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Apellido"]);
        },
        "id": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["N\xFAmero de Identificaci\xF3n"]);
        },
        "dateOfBirth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha de Nacimiento"]);
        },
        "emissionDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha de Emisi\xF3n"]);
        },
        "Status": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Estado"]);
        },
        "cancelationDate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha de Cancelaci\xF3n"]);
        },
        "cancelationReason": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Raz\xF3n de Cancelaci\xF3n"]);
        }
      }
    },
    "users": {
      "list": {
        "pageTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Gestion de Operarios"]);
        },
        "tableColumns": {
          "fullname": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nombre completo"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nombres"]);
          },
          "lastName": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Apellidos"]);
          },
          "createdBy": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Creado Por"]);
          },
          "deactivationDate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fecha de Inactivaci\xF3n"]);
          },
          "deactivationReason": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Raz\xF3n de Inactivaci\xF3n"]);
          },
          "allowedAccess": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Acesso permitido"]);
          },
          "role": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Rol"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["E-mail"]);
          },
          "iniciative": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["iniciativa"]);
          },
          "profile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Perfiles"]);
          }
        }
      },
      "create": {
        "pageTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Crear Usuario"]);
        },
        "form": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nombres"]);
          },
          "lastName": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Apellido"]);
          },
          "email": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["E-mail"]);
          },
          "password": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Clave"]);
          },
          "role": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Rol"]);
          },
          "profile": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Perfil"]);
          },
          "selectCountry": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Seleccione el Pais"]);
          },
          "selectRoles": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Selecione al menos una Iniciativa"]);
          }
        }
      }
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xDAnete a nosotros ahora"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Empieza creando tu cuenta"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recibe ofertas promocionales"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ya tengo una cuenta"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrarse"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Direcci\xF3n de correo electr\xF3nico"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contrase\xF1a"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Verificaci\xF3n de contrase\xF1a"]);
        }
      },
      "user": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "sesions": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Lo sentimos, debe iniciar sesi\xF3n para acceder a esta secci\xF3n (todo funcionar\xE1)"]);
        },
        "emails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Error de autenticaci\xF3n. Direcci\xF3n de correo electr\xF3nico o contrase\xF1a incorrectas"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Su nombre es obligatorio"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su correo electr\xF3nico, ser\xE1 necesario para iniciar la sesi\xF3n"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, introduzca un correo electr\xF3nico v\xE1lido"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su contrase\xF1a con al menos 8 caracteres, ser\xE1 necesaria para iniciar la sesi\xF3n"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, confirme su contrase\xF1a"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a no coincide"]);
          }
        },
        "user": {
          "nocreate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Ocurri\xF3 un error, \xA1no se pudo crear un usuario!"]);
          }
        }
      }
    },
    "config": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Configuraci\xF3n"]);
      },
      "ChangePassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cambiar contrase\xF1a"]);
      },
      "text": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Ingrese una nueva contrase\xF1a que cumpla con los parametros y confirmela."]);
      },
      "newPassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Nueva contrase\xF1a"]);
      },
      "confirmPassword": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Confirmar contrase\xF1a"]);
      },
      "parameters": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Parametros:"]);
        },
        "containsLowercase": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La contrase\xF1a debe contener al menos una letra min\xFAscula."]);
        },
        "containsNumber": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La contrase\xF1a debe contener al menos un n\xFAmero."]);
        },
        "containsUppercase": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La contrase\xF1a debe contener al menos un car\xE1cter en may\xFAscula."]);
        },
        "containsSpecial": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La contrase\xF1a debe contener al menos un car\xE1cter especial."]);
        },
        "characterMin": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres."]);
        },
        "users": {
          "supervisor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Supervisor"]);
          },
          "visor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Consulta"]);
          },
          "emisor": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Consulta y Emision"]);
          }
        }
      }
    },
    "selectAnOption": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Selecciona una opci\xF3n"]);
    },
    "autogestao": {
      "step1": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Patrocinador"]);
      },
      "step2": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Producto"]);
      },
      "step3": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Campa\xF1a"]);
      },
      "step4": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Plan"]);
      },
      "step5": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Cuentas y configuraciones"]);
      },
      "summary": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Resumen"]);
      },
      "next": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Siguiente"]);
      },
      "before": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Atras"]);
      },
      "form": {
        "sponsor": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nombre"]);
          },
          "code": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["C\xF3digo"]);
          }
        }
      }
    },
    "summary": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Resumen de Carga"]);
      },
      "message": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["La consulta puede llevar un tiempo!"]);
      }
    },
    "monitoring": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Seguimiento de Carga"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Consultar Registros"]);
      },
      "sutitleDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Selecci\xF3n de fecha"]);
      },
      "tabs": {
        "records": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registros"]);
        },
        "resume": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Resumen"]);
        }
      },
      "body": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Para consultar los registros, primero escoja el estado y fecha deseada."]);
      },
      "bodyDate": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Para consultar el resumen, primero elija la fecha deseada."]);
      },
      "optionStates": {
        "noProccess": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No procesados"]);
        },
        "proccess": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Procesados"]);
        },
        "fails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fallidos"]);
        }
      },
      "columnsTitle": {
        "group": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Grupo"]);
        },
        "branch": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sucursal"]);
        },
        "id_number": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["N\xFAmero de boleto y/o certificado"]);
        },
        "rate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tipo de tarifa"]);
        },
        "last_name_1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Apellido Paterno"]);
        },
        "last_name_2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Apellido Materno"]);
        },
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "premium": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Prima total"]);
        },
        "sale_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha de venta"]);
        },
        "ride_start_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha y hora de inicio del viaje"]);
        },
        "ride_end_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha y hora del fin del viaje"]);
        },
        "address_1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Origen del viaje"]);
        },
        "address_2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Destino del viaje"]);
        },
        "user_branch": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Canal de venta"]);
        },
        "transac_type": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Tipo de transacci\xF3n"]);
        },
        "boarding": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Abordaje"]);
        },
        "transac_date": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fecha de envio de transacci\xF3n"]);
        },
        "file_name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre del archivo"]);
        },
        "state": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Estado"]);
        }
      }
    },
    "details": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Detalles"]);
    },
    "successful": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Exitosos"]);
    },
    "notProcessed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["No Procesados"]);
    },
    "failed": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Fallidos"]);
    },
    "consult": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Consultar"]);
    },
    "all": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Todos"]);
    }
  },
  "es": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Seleccione el idioma"]);
    },
    "login-welcome": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bienvenido"]);
    },
    "login-initSesion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Iniciar sesi\xF3n"]);
    },
    "login-email": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Correo"]);
    },
    "login-password": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Contrase\xF1a"]);
    },
    "login-forgot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Olvid\xE9 mi contrase\xF1a"]);
    },
    "login-remember": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Recordar contrase\xF1a"]);
    },
    "login-go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entrar"]);
    },
    "dashboard": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Welcome"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["We are very happy to see it again."]);
      },
      "options": {
        "currentMonth": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mes Actual"]);
        },
        "lastSemester": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\xDAltimos 6 meses"]);
        }
      },
      "labels": {
        "yes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Si"]);
        },
        "selectRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rangos Predefinidos"]);
        },
        "no": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No"]);
        },
        "dateRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Rango de fechas a consultar"]);
        }
      }
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\xDAnete a nosotros ahora"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Empieza creando tu cuenta"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recibe ofertas promocionales"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ya tengo una cuenta"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Registrarse"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nombre"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Direcci\xF3n de correo electr\xF3nico"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contrase\xF1a"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Verificaci\xF3n de contrase\xF1a"]);
        }
      },
      "user": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Modifica los campos que quieras actualizar para este usuario."]);
        },
        "sesions": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Lo sentimos, debe iniciar sesi\xF3n para acceder a esta secci\xF3n (todo funcionar\xE1)"]);
        },
        "emails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Error de autenticaci\xF3n. email o contrase\xF1a incorrecta"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Su nombre es obligatorio"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su correo electr\xF3nico, ser\xE1 necesario para iniciar la sesi\xF3n"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, introduzca un correo electr\xF3nico v\xE1lido"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Introduzca su contrase\xF1a con al menos 8 caracteres, ser\xE1 necesaria para iniciar la sesi\xF3n"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a debe contener al menos 8 caracteres"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Por favor, confirme su contrase\xF1a"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["La contrase\xF1a no coincide"]);
          }
        },
        "nocreate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Hubo un error, no se pudo crear el usuario!"]);
        }
      }
    },
    "utils": {
      "vuegoodtable": {
        "columns": {
          "flebotomista": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Flebotomista"]);
          },
          "paymentReference": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Referencia de Pago"]);
          },
          "paidAmount": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Monto Pagado"]);
          },
          "paymentResult": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Respuesta de Pago"]);
          },
          "paymentDate": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fecha de Pago"]);
          },
          "cardType": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tipo de Tarjeta"]);
          },
          "cardNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xFAmero de Tarjeta"]);
          }
        }
      },
      "headerCards": {
        "detailsCards": {
          "QuoteInformation": {
            "premiumNeta": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Prima Neta"]);
            },
            "comision": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Comisi\xF3n"]);
            }
          },
          "paymentInformation": {
            "titleV2": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Informaci\xF3n de Recibo"]);
            }
          }
        }
      },
      "notifMessages": {
        "reportWarning": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize([]);
        }
      },
      "buttons": {
        "ExportCSV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Exportar Excel"]);
        }
      }
    },
    "sidebar": {
      "subItems": {
        "paymentConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consulta de Pagos"]);
        },
        "paymentDetail": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Detalle de Pago"]);
        },
        "novo": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nueva"]);
        },
        "autogestaoTitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sistema de Autogesti\xF3n"]);
        },
        "reportsConsultClosedTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Venta de Turnos"]);
        },
        "reportsConsultTurn": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cierre de Turnos"]);
        }
      }
    }
  },
  "fr": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["S\xE9lectionnez une langue"]);
    },
    "login-welcome": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bienvenue"]);
    },
    "login-initSesion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Iniciar sess\xE3o"]);
    },
    "login-email": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["O email"]);
    },
    "login-password": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Senha"]);
    },
    "login-forgot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Esqueci minha senha"]);
    },
    "login-remember": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Lembrar senha"]);
    },
    "login-go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entrar"]);
    },
    "dashboard": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Welcome"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["We are very happy to see it again."]);
      },
      "labels": {
        "selectRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Plages pr\xE9d\xE9finies"]);
        }
      }
    },
    "sidebar": {
      "titles": {
        "policies": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Policies"]);
        },
        "reports": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reports"]);
        },
        "users": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Users"]);
        }
      },
      "subItems": {
        "policyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Policy"]);
        },
        "historyConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Historical"]);
        },
        "productsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Products"]);
        },
        "paymentsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Payments"]);
        },
        "reportsConsult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult Reports"]);
        },
        "userManagement": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["User Management"]);
        }
      },
      "profileDropdown": {
        "logout": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Log Out"]);
        }
      }
    },
    "utils": {
      "vuegoodtable": {
        "config": {
          "rowsPerPage": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Linhas por p\xE1gina"]);
          },
          "of": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["De"]);
          },
          "previous": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Anterior"]);
          },
          "next": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Pr\xF3xima"]);
          },
          "search": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Tabela de pesquisa"]);
          }
        },
        "columns": {
          "PolicyNumber": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["N\xFAmero da Ap\xF3lice"]);
          },
          "discountMethod": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["M\xE9todo de desconto"]);
          },
          "Plan": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Plano"]);
          },
          "Award": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Pr\xEAmio"]);
          },
          "productId": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["ID do produto"]);
          },
          "StartValidity": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["In\xEDcio de validade"]);
          },
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Nome completo"]);
          },
          "status": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Status"]);
          },
          "action": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["A\xE7ao"]);
          },
          "statusUello": {
            "active": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ativa"]);
            },
            "expired": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expirada"]);
            },
            "cancelled": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cancelada"]);
            }
          },
          "pagamento": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Forma de Pagamento"]);
          },
          "statusminimed": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Estado"]);
          },
          "iniciovigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["In\xEDcio de Vig\xEAncia"]);
          },
          "fimvigencia": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Fim de Vig\xEAncia"]);
          }
        }
      },
      "buttons": {
        "consult": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Consult"]);
        },
        "goBack": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Go Back"]);
        },
        "createUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Create User"]);
        },
        "generateReport": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Generate Report"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["See Details"]);
        },
        "downloadCertificate": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Certificate"]);
        },
        "downloadAcuse": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Acuse"]);
        },
        "downloadCaratula": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Download Caratula"]);
        },
        "update": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Update"]);
        },
        "cancel": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel"]);
        },
        "ExportCSV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Exportar Excel"]);
        }
      },
      "headerCards": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select a date range"]);
        },
        "subtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To be able to consult policies, first pick the desire date range."]);
        },
        "titleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Select preferred filter"]);
        },
        "subtitleV2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["To be able to consult policies, first pick one of the available filters."]);
        },
        "switchLabel1": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Date Range"]);
        },
        "switchLabel2": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Quick Search"]);
        },
        "detailsCards": {
          "currentQuote": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Current Quote Information"]);
            },
            "contractorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Contractor Name"]);
            },
            "documentNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document Number"]);
            },
            "transactionType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Transaction Type"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Names"]);
            },
            "lastNames": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Last Names"]);
            },
            "document": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Document"]);
            },
            "fullname": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Fullname"]);
            },
            "sponsorName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Sponsor Name"]);
            }
          },
          "selectedProduct": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Selected Product"]);
            },
            "campaignCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campaign Code"]);
            },
            "productCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Product Code"]);
            },
            "coverageCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["CoverageCode"]);
            },
            "iva": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["VAT"]);
            },
            "netPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Net Premium"]);
            },
            "paidPremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Paid Premium"]);
            }
          },
          "paymentInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Information"]);
            },
            "accountType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Account Type"]);
            },
            "cardNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Card Number"]);
            },
            "frequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Frequency"]);
            },
            "cycleDay": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Cycle Day"]);
            },
            "accountName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Account Name"]);
            },
            "expiredMonth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expired Month"]);
            },
            "expiredYear": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Expired Year"]);
            },
            "cardType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Card Type"]);
            },
            "paymentFrequency": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Frequency"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            }
          },
          "QuoteInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Quote Information"]);
            },
            "certificateNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Certificate Number"]);
            },
            "status": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Status"]);
            },
            "planCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Code"]);
            },
            "storeName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Store Name"]);
            },
            "effectiveDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Effective Date"]);
            },
            "movementDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Movement Date"]);
            },
            "renewalDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Renewal Date"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "policyNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Policy Number"]);
            },
            "plan": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan"]);
            },
            "campaign": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Campaign"]);
            },
            "premium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Premium"]);
            }
          },
          "generalClientInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["General Client Information"]);
            },
            "names": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Names"]);
            },
            "firstLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["First Last Name"]);
            },
            "secondLastName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Second Last Name"]);
            },
            "sex": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Genre"]);
            },
            "dateOfBirth": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Date of Birth"]);
            },
            "age": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Age"]);
            },
            "ocupation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Ocupation"]);
            },
            "beneficiary": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Beneficiary"]);
            },
            "insured": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Insured"]);
            },
            "insuranceType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Insurance Type"]);
            }
          },
          "locationInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Location Information"]);
            },
            "streetAndNumber": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Street and Number"]);
            },
            "colony": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Neighborhood"]);
            },
            "city": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["City"]);
            },
            "state": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["State"]);
            },
            "zipCode": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Zip Code"]);
            }
          },
          "contactInformation": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Contact Information"]);
            },
            "mobilePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Mobile Phone"]);
            },
            "officePhone": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Work Phone"]);
            },
            "email": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Email"]);
            }
          }
        }
      },
      "tooltips": {
        "deactivateUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Deactivate User"]);
        },
        "deleteUser": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Delete User"]);
        },
        "seeDetails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["See Details"]);
        },
        "cancelPolicy": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cancel Policy"]);
        },
        "editBeneficiary": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Edit Beneficiary"]);
        }
      },
      "notifMessages": {},
      "sweetAlertMessages": {},
      "emptyDataPlaceholders": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["No Available Data"]);
        },
        "paymentTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any paid installments for this policy in our system."]);
        },
        "additionalInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any additional insured for this policy in our system."]);
        },
        "mainInsuredTabSubtitle": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["We did not find any main insured for this policy in our system."]);
        }
      },
      "tabs": {
        "beneficiaries": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiaries Information"]);
          },
          "tableColumns": {
            "name": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Name"]);
            },
            "relation": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Relation"]);
            },
            "endDate": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["End Date"]);
            },
            "percentage": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentage"]);
            }
          },
          "detailsModal": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Beneficiary Details"]);
          },
          "editModal": {
            "title": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Edit Beneficiary"]);
            },
            "messageTitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentages Distributed Correctly!"]);
            },
            "messageTitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Total Percentages should be equal to 100%"]);
            },
            "subtitleSuccess": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentages Total"]);
            },
            "subtitleError": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Percentage Required"]);
            }
          }
        },
        "coverages": {
          "name": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverages"]);
          },
          "tableTitle": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Coverages Information"]);
          },
          "tableColumns": {
            "coverageName": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Name"]);
            },
            "planIdentification": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Identification"]);
            },
            "planFee": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Plan Fee"]);
            },
            "coveragePremium": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Coverage Premium"]);
            },
            "benefitAmount": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Benefit Amount"]);
            },
            "paymentMethod": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Method"]);
            },
            "paymentType": (ctx) => {
              const { normalize: _normalize } = ctx;
              return _normalize(["Payment Type"]);
            }
          }
        },
        "payments": {},
        "additionalInsured": {},
        "mainInsured": {}
      }
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Rejoignez-nous maintenant"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Commencez par cr\xE9er votre compte"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recevez des offres promotionnelles"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["J'ai d\xE9j\xE0 un compte"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cr\xE9er un compte"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Nom"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Adresse \xE9lectronique"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Mot de passe"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["V\xE9rification du mot de passe"]);
        }
      },
      "user": {
        "sesions": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["D\xE9sol\xE9, vous devez \xEAtre connect\xE9 pour acc\xE9der \xE0 cette section (tout fonctionnera)."]);
        },
        "emails": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Erreur d'authentification. Courriel ou mot de passe incorrect"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Votre nom, pr\xE9nom est obligatoire"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Entrez votre email, il sera n\xE9cessaire pour vous connecter"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Veuillez entrer une adresse \xE9lectronique valide"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Entrez votre mot de passe avec au moins 8 caract\xE8res, il vous sera demand\xE9 pour vous connecter"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Le mot de passe doit contenir au moins 8 caract\xE8res"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Veuillez confirmer votre mot de passe"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["Le mot de passe ne correspond pas"]);
          }
        }
      }
    }
  },
  "zh-CN": {
    "select-language": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["\u9009\u62E9\u8BED\u8A00"]);
    },
    "login-welcome": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Bienvenido"]);
    },
    "login-initSesion": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Iniciar sesi\xF3n"]);
    },
    "login-email": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Correo"]);
    },
    "login-password": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Contrase\xF1a"]);
    },
    "login-forgot": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Olvid\xE9 mi contrase\xF1a"]);
    },
    "login-go": (ctx) => {
      const { normalize: _normalize } = ctx;
      return _normalize(["Entrar"]);
    },
    "dashboard": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["Welcome"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["We are very happy to see it again."]);
      },
      "labels": {
        "selectRange": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u9884\u5B9A\u4E49\u8303\u56F4"]);
        }
      }
    },
    "auth": {
      "title": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u73B0\u5728\u5C31\u52A0\u5165\u6211\u4EEC"]);
      },
      "subtitle": (ctx) => {
        const { normalize: _normalize } = ctx;
        return _normalize(["\u4ECE\u521B\u5EFA\u4F60\u7684\u8D26\u6237\u5F00\u59CB"]);
      },
      "label": {
        "promotional": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u63A5\u6536\u4FC3\u9500\u4F18\u60E0"]);
        }
      },
      "action": {
        "login": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6211\u5DF2\u7ECF\u6709\u4E00\u4E2A\u8D26\u6237"]);
        },
        "signup": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u6CE8\u518C"]);
        }
      },
      "placeholder": {
        "name": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u59D3\u540D"]);
        },
        "email": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u7535\u5B50\u90AE\u4EF6\u5730\u5740"]);
        },
        "password": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BC6\u7801"]);
        },
        "passwordCheck": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5BC6\u7801\u9A8C\u8BC1"]);
        }
      },
      "errors": {
        "name": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u60A8\u7684\u59D3\u540D\u662F\u5FC5\u586B\u7684"]);
          }
        },
        "email": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8F93\u5165\u4F60\u7684\u7535\u5B50\u90AE\u4EF6\uFF0C\u5B83\u5C06\u662F\u767B\u5F55\u7684\u5FC5\u8981\u6761\u4EF6"]);
          },
          "format": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u8F93\u5165\u4E00\u4E2A\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6"]);
          }
        },
        "password": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801\uFF0C\u81F3\u5C11\u67098\u4E2A\u5B57\u7B26\uFF0C\u767B\u5F55\u65F6\u5FC5\u987B\u8F93\u5165"]);
          },
          "length": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u5BC6\u7801\u5E94\u81F3\u5C11\u5305\u542B8\u4E2A\u5B57\u7B26"]);
          }
        },
        "passwordCheck": {
          "required": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BF7\u786E\u8BA4\u60A8\u7684\u5BC6\u7801"]);
          },
          "match": (ctx) => {
            const { normalize: _normalize } = ctx;
            return _normalize(["\u8BE5\u5BC6\u7801\u4E0D\u5339\u914D"]);
          }
        }
      }
    },
    "utils": {
      "buttons": {
        "ExportCSV": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Exportar Excel"]);
        }
      }
    }
  }
};
function createI18n() {
  const defaultLocale = useStorage("locale", (navigator == null ? void 0 : navigator.language) || "es-MX");
  const i18n = createI18n$1({
    locale: defaultLocale.value,
    messages
  });
  return i18n;
}
const scriptRel = "modulepreload";
const seen = {};
const base = "/";
const __vitePreload = function preload(baseModule, deps) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  return Promise.all(deps.map((dep) => {
    dep = `${base}${dep}`;
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", rej);
      });
    }
  })).then(() => baseModule());
};
var block0$1 = {};
const _sfc_main$6 = {};
if (typeof block0$1 === "function")
  block0$1(_sfc_main$6);
const routes = [{ "name": "app", "path": "/app", "component": () => __vitePreload(() => import("./app.c247acfb.js"), true ? [] : void 0), "props": true, "redirect": { "name": "auth-login-1" } }, { "path": "/auth", "component": () => __vitePreload(() => import("./auth.eb7aba7c.js"), true ? ["assets/auth.eb7aba7c.js","assets/auth.4a9d4d8a.css","assets/vendor.6548d360.js"] : void 0), "children": [{ "name": "auth", "path": "", "component": () => __vitePreload(() => import("./index.d1fa2869.js"), true ? [] : void 0), "props": true, "redirect": { "name": "auth-login-1" } }, { "name": "auth-login-1", "path": "login-1", "component": () => __vitePreload(() => import("./login-1.c8a30b42.js"), true ? ["assets/login-1.c8a30b42.js","assets/login-1.33bab72b.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/index.c13a9b10.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true }, { "name": "auth-login-2", "path": "login-2", "component": () => __vitePreload(() => import("./login-2.e66b0eb6.js"), true ? ["assets/login-2.e66b0eb6.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-login-3", "path": "login-3", "component": () => __vitePreload(() => import("./login-3.f8c4d989.js"), true ? ["assets/login-3.f8c4d989.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/vendor.6548d360.js","assets/panels.9ed80fb9.js","assets/Toolbar.cbd734d2.js","assets/LoginForm.511a1f45.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/index.c13a9b10.js","assets/ResetForm.6591658d.js","assets/index.esm.8b858c3a.js"] : void 0), "props": true }, { "name": "auth-signup-1", "path": "signup-1", "component": () => __vitePreload(() => import("./signup-1.2a3e0d44.js"), true ? ["assets/signup-1.2a3e0d44.js","assets/signup-1.88228743.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VSwitchBlock.3a146329.js","assets/VSwitchBlock.bb1f7f06.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/tiny-slider.d87e9682.js","assets/sleep.2a252ff4.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true }, { "name": "auth-signup-2", "path": "signup-2", "component": () => __vitePreload(() => import("./signup-2.4e5d9f63.js"), true ? ["assets/signup-2.4e5d9f63.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-signup-3", "path": "signup-3", "component": () => __vitePreload(() => import("./signup-3.d7661ca0.js"), true ? ["assets/signup-3.d7661ca0.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js"] : void 0), "props": true }, { "name": "auth-components-LoginForm", "path": "components/loginform", "component": () => __vitePreload(() => import("./LoginForm.511a1f45.js"), true ? ["assets/LoginForm.511a1f45.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/index.c13a9b10.js"] : void 0), "props": true }, { "name": "auth-components-ResetForm", "path": "components/resetform", "component": () => __vitePreload(() => import("./ResetForm.6591658d.js"), true ? ["assets/ResetForm.6591658d.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/index.esm.8b858c3a.js"] : void 0), "props": true }], "props": true }, { "path": "/components", "component": () => __vitePreload(() => import("./components.8c55c05c.js"), true ? ["assets/components.8c55c05c.js","assets/components.c101f428.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/layoutSwitcher.8d409c39.js"] : void 0), "children": [{ "name": "components-block", "path": "block", "component": () => __vitePreload(() => import("./block.fff405ec.js"), true ? ["assets/block.fff405ec.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-breadcrumb", "path": "breadcrumb", "component": () => __vitePreload(() => import("./breadcrumb.ec1c27cc.js"), true ? ["assets/breadcrumb.ec1c27cc.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-collapse", "path": "collapse", "component": () => __vitePreload(() => import("./collapse.e81d9f87.js"), true ? ["assets/collapse.e81d9f87.js","assets/collapse.ebdc7490.css","assets/VIcon.de064b10.js","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-content", "path": "content", "component": () => __vitePreload(() => import("./content.3958ce12.js"), true ? ["assets/content.3958ce12.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-flex", "path": "flex", "component": () => __vitePreload(() => import("./flex.9a122fd7.js"), true ? ["assets/flex.9a122fd7.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-grid", "path": "grid", "component": () => __vitePreload(() => import("./grid.b41e7966.js"), true ? ["assets/grid.b41e7966.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-icon-box", "path": "icon-box", "component": () => __vitePreload(() => import("./icon-box.32a5de5a.js"), true ? ["assets/icon-box.32a5de5a.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-icon-wrap", "path": "icon-wrap", "component": () => __vitePreload(() => import("./icon-wrap.84d02555.js"), true ? ["assets/icon-wrap.84d02555.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components", "path": "", "component": () => __vitePreload(() => import("./index.d674c654.js"), true ? ["assets/index.d674c654.js","assets/index.3fea3b53.css","assets/HubCard.b84d0c6b.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-pagination", "path": "pagination", "component": () => __vitePreload(() => import("./pagination.f18101c2.js"), true ? ["assets/pagination.f18101c2.js","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-placeholder-page", "path": "placeholder-page", "component": () => __vitePreload(() => import("./placeholder-page.355966b2.js"), true ? ["assets/placeholder-page.355966b2.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/search-1-dark.119fdb96.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-placeholder-section", "path": "placeholder-section", "component": () => __vitePreload(() => import("./placeholder-section.51bedc87.js"), true ? ["assets/placeholder-section.51bedc87.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VPlaceholderSection.d614fe7b.js","assets/VPlaceholderSection.e1b1502b.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-snack", "path": "snack", "component": () => __vitePreload(() => import("./snack.7f10469a.js"), true ? ["assets/snack.7f10469a.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-table", "path": "table", "component": () => __vitePreload(() => import("./table.2f224244.js"), true ? ["assets/table.2f224244.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/FlexTableDropdown.bdf5c6d6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-tabs", "path": "tabs", "component": () => __vitePreload(() => import("./tabs.3da33624.js"), true ? ["assets/tabs.3da33624.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-tag", "path": "tag", "component": () => __vitePreload(() => import("./tag.8f1932dc.js"), true ? ["assets/tag.8f1932dc.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-accordion-image", "path": "accordion/image", "component": () => __vitePreload(() => import("./image.32159221.js"), true ? ["assets/image.32159221.js","assets/image.9717f7e5.css","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-accordion", "path": "accordion", "component": () => __vitePreload(() => import("./index.b424a77c.js"), true ? ["assets/index.b424a77c.js","assets/index.7f023c9a.css","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/Toolbar.cbd734d2.js","assets/panels.9ed80fb9.js","assets/sidebar.098cc062.js"] : void 0), "props": true }, { "name": "components-avatar", "path": "avatar", "component": () => __vitePreload(() => import("./index.b65b2eb7.js"), true ? ["assets/index.b65b2eb7.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-avatar-stack", "path": "avatar/stack", "component": () => __vitePreload(() => import("./stack.6393b88f.js"), true ? ["assets/stack.6393b88f.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-card-action", "path": "card/action", "component": () => __vitePreload(() => import("./action.d8a4e026.js"), true ? ["assets/action.d8a4e026.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-card-advanced", "path": "card/advanced", "component": () => __vitePreload(() => import("./advanced.69378326.js"), true ? ["assets/advanced.69378326.js","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/vendor.6548d360.js","assets/useDropdown.145111f2.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-card", "path": "card", "component": () => __vitePreload(() => import("./index.f222aeb3.js"), true ? ["assets/index.f222aeb3.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/UserCardDropdown.f26fcac6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/UserPopoverContent.5da306fe.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "components-card-media", "path": "card/media", "component": () => __vitePreload(() => import("./media.a66e13b5.js"), true ? ["assets/media.a66e13b5.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-card-social", "path": "card/social", "component": () => __vitePreload(() => import("./social.6cd87c9b.js"), true ? ["assets/social.6cd87c9b.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIcon.de064b10.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-flextable-columns", "path": "flextable/columns", "component": () => __vitePreload(() => import("./columns.b03dfe37.js"), true ? ["assets/columns.b03dfe37.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/DocumentationDivider.7f67faa1.js","assets/DocumentationDivider.ef27401c.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/table.31d75fbb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-flextable", "path": "flextable", "component": () => __vitePreload(() => import("./index.1a4d952c.js"), true ? ["assets/index.1a4d952c.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/DocumentationDivider.7f67faa1.js","assets/DocumentationDivider.ef27401c.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/table.31d75fbb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-flextable-render", "path": "flextable/render", "component": () => __vitePreload(() => import("./render.704f8191.js"), true ? ["assets/render.704f8191.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/table.31d75fbb.js","assets/viewWrapper.d4aba839.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/FlexTableDropdown.bdf5c6d6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js"] : void 0), "props": true }, { "name": "components-flextable-slots", "path": "flextable/slots", "component": () => __vitePreload(() => import("./slots.d1328d69.js"), true ? ["assets/slots.d1328d69.js","assets/DocumentationDivider.7f67faa1.js","assets/DocumentationDivider.ef27401c.css","assets/vendor.6548d360.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VAction.e7ce9b1a.js","assets/VAction.a21725b1.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VField.b8c33879.js","assets/VCheckbox.486c8d05.js","assets/VCheckbox.b8116bc9.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/table.31d75fbb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-plugins-billboard-js", "path": "plugins/billboard-js", "component": () => __vitePreload(() => import("./billboard-js.8ad5128b.js"), true ? ["assets/billboard-js.8ad5128b.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBillboardJS.a97b3f73.js","assets/VBillboardJS.3bd96733.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/splineSimple.5eb03d2d.js","assets/useThemeColors.b71015d4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-plugins-notif", "path": "plugins/notif", "component": () => __vitePreload(() => import("./notif.952a9989.js"), true ? ["assets/notif.952a9989.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-plugins-photos-swipe", "path": "plugins/photos-swipe", "component": () => __vitePreload(() => import("./photos-swipe.cf9e95ff.js"), true ? ["assets/photos-swipe.cf9e95ff.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-plugins-plyr", "path": "plugins/plyr", "component": () => __vitePreload(() => import("./plyr.90acef5e.js"), true ? ["assets/plyr.90acef5e.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-plugins-simple-datatables", "path": "plugins/simple-datatables", "component": () => __vitePreload(() => import("./simple-datatables.2e309374.js"), true ? ["assets/simple-datatables.2e309374.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VSimpleDatatables.f197f002.js","assets/VSimpleDatatables.fc85b97e.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-plugins-tippy", "path": "plugins/tippy", "component": () => __vitePreload(() => import("./tippy.8bd67701.js"), true ? ["assets/tippy.8bd67701.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "components-flextable-wrapper-async", "path": "flextable/wrapper/async", "component": () => __vitePreload(() => import("./async.17f64ace.js"), true ? [] : void 0), "props": true }, { "name": "components-flextable-wrapper", "path": "flextable/wrapper", "component": () => __vitePreload(() => import("./index.658195e9.js"), true ? ["assets/index.658195e9.js","assets/index.eee74abd.css","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/index.5f5b7c31.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }], "props": true }, { "path": "/elements", "component": () => __vitePreload(() => import("./elements.d5fe8957.js"), true ? ["assets/elements.d5fe8957.js","assets/components.c101f428.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/layoutSwitcher.8d409c39.js"] : void 0), "children": [{ "name": "elements-action", "path": "action", "component": () => __vitePreload(() => import("./action.112f38af.js"), true ? ["assets/action.112f38af.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-animated-checkbox", "path": "animated-checkbox", "component": () => __vitePreload(() => import("./animated-checkbox.97f3720b.js"), true ? ["assets/animated-checkbox.97f3720b.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-button", "path": "button", "component": () => __vitePreload(() => import("./button.579bc61c.js"), true ? ["assets/button.579bc61c.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-checkbox", "path": "checkbox", "component": () => __vitePreload(() => import("./checkbox.4cb8ee35.js"), true ? ["assets/checkbox.4cb8ee35.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-colors", "path": "colors", "component": () => __vitePreload(() => import("./colors.37ed2055.js"), true ? ["assets/colors.37ed2055.js","assets/colors.a7547279.css","assets/VAction.e7ce9b1a.js","assets/VAction.a21725b1.css","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-control", "path": "control", "component": () => __vitePreload(() => import("./control.b5c2d0c6.js"), true ? ["assets/control.b5c2d0c6.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-dropdown", "path": "dropdown", "component": () => __vitePreload(() => import("./dropdown.8be11bb3.js"), true ? ["assets/dropdown.8be11bb3.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-field", "path": "field", "component": () => __vitePreload(() => import("./field.421d7baa.js"), true ? ["assets/field.421d7baa.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-helpers", "path": "helpers", "component": () => __vitePreload(() => import("./helpers.503a838a.js"), true ? ["assets/helpers.503a838a.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-icon-button", "path": "icon-button", "component": () => __vitePreload(() => import("./icon-button.18e1a458.js"), true ? ["assets/icon-button.18e1a458.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements", "path": "", "component": () => __vitePreload(() => import("./index.599cb1a6.js"), true ? ["assets/index.599cb1a6.js","assets/index.3fea3b53.css","assets/HubCard.b84d0c6b.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-loader", "path": "loader", "component": () => __vitePreload(() => import("./loader.6218d492.js"), true ? ["assets/loader.6218d492.js","assets/VLoader.74e9a6e7.js","assets/VLoader.9a8a8544.css","assets/vendor.6548d360.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-message", "path": "message", "component": () => __vitePreload(() => import("./message.99d615dd.js"), true ? ["assets/message.99d615dd.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-modal", "path": "modal", "component": () => __vitePreload(() => import("./modal.a0037071.js"), true ? ["assets/modal.a0037071.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/VPlaceholderSection.d614fe7b.js","assets/VPlaceholderSection.e1b1502b.css","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-progress", "path": "progress", "component": () => __vitePreload(() => import("./progress.453c6635.js"), true ? ["assets/progress.453c6635.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-radio", "path": "radio", "component": () => __vitePreload(() => import("./radio.c05ed728.js"), true ? ["assets/radio.c05ed728.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-switch-block", "path": "switch-block", "component": () => __vitePreload(() => import("./switch-block.8bdbaa05.js"), true ? ["assets/switch-block.8bdbaa05.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-switch-segment", "path": "switch-segment", "component": () => __vitePreload(() => import("./switch-segment.4d153a0d.js"), true ? ["assets/switch-segment.4d153a0d.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-tooltip", "path": "tooltip", "component": () => __vitePreload(() => import("./tooltip.45eab78d.js"), true ? ["assets/tooltip.45eab78d.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-calendar", "path": "addons/calendar", "component": () => __vitePreload(() => import("./calendar.28507e6a.js"), true ? ["assets/calendar.28507e6a.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-ckeditor", "path": "addons/ckeditor", "component": () => __vitePreload(() => import("./ckeditor.110119bf.js"), true ? ["assets/ckeditor.110119bf.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-credit-card", "path": "addons/credit-card", "component": () => __vitePreload(() => import("./credit-card.8510a2c9.js"), true ? ["assets/credit-card.8510a2c9.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-filepond", "path": "addons/filepond", "component": () => __vitePreload(() => import("./filepond.d8e4c816.js"), true ? ["assets/filepond.d8e4c816.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-imask-input", "path": "addons/imask-input", "component": () => __vitePreload(() => import("./imask-input.397fc587.js"), true ? ["assets/imask-input.397fc587.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-vueform-multiselect", "path": "addons/vueform-multiselect", "component": () => __vitePreload(() => import("./vueform-multiselect.f55e9f74.js"), true ? ["assets/vueform-multiselect.f55e9f74.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-addons-vueform-slider", "path": "addons/vueform-slider", "component": () => __vitePreload(() => import("./vueform-slider.5a0652dd.js"), true ? ["assets/vueform-slider.5a0652dd.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-forms-addons", "path": "forms/addons", "component": () => __vitePreload(() => import("./addons.420fa1e2.js"), true ? ["assets/addons.420fa1e2.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-forms-file", "path": "forms/file", "component": () => __vitePreload(() => import("./file.920d93d4.js"), true ? ["assets/file.920d93d4.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-forms-inputs", "path": "forms/inputs", "component": () => __vitePreload(() => import("./inputs.68c4fef9.js"), true ? ["assets/inputs.68c4fef9.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-forms-selects", "path": "forms/selects", "component": () => __vitePreload(() => import("./selects.b5fd7b8c.js"), true ? ["assets/selects.b5fd7b8c.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-forms-textarea", "path": "forms/textarea", "component": () => __vitePreload(() => import("./textarea.027f2a47.js"), true ? ["assets/textarea.027f2a47.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-icons-font-awesome", "path": "icons/font-awesome", "component": () => __vitePreload(() => import("./font-awesome.75e1cfcb.js"), true ? ["assets/font-awesome.75e1cfcb.js","assets/DocumentationDemoCard.41e9dc38.js","assets/DocumentationDemoCard.2ca7e7be.css","assets/vendor.6548d360.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-icons-iconify", "path": "icons/iconify", "component": () => __vitePreload(() => import("./iconify.1f174aec.js"), true ? ["assets/iconify.1f174aec.js","assets/DocumentationDemoCard.41e9dc38.js","assets/DocumentationDemoCard.2ca7e7be.css","assets/vendor.6548d360.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-icons-line-icons-light", "path": "icons/line-icons-light", "component": () => __vitePreload(() => import("./line-icons-light.15de32c0.js"), true ? ["assets/line-icons-light.15de32c0.js","assets/DocumentationDemoCard.41e9dc38.js","assets/DocumentationDemoCard.2ca7e7be.css","assets/vendor.6548d360.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-icons-line-icons-regular", "path": "icons/line-icons-regular", "component": () => __vitePreload(() => import("./line-icons-regular.a8767f9e.js"), true ? ["assets/line-icons-regular.a8767f9e.js","assets/DocumentationDemoCard.41e9dc38.js","assets/DocumentationDemoCard.2ca7e7be.css","assets/vendor.6548d360.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-placeload-avatar", "path": "placeload/avatar", "component": () => __vitePreload(() => import("./avatar.a85d8f02.js"), true ? ["assets/avatar.a85d8f02.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-placeload", "path": "placeload", "component": () => __vitePreload(() => import("./index.01f66d74.js"), true ? ["assets/index.01f66d74.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "elements-placeload-text", "path": "placeload/text", "component": () => __vitePreload(() => import("./text.deeebcfa.js"), true ? ["assets/text.deeebcfa.js","assets/useMarkdownToc.9d73245a.js","assets/useMarkdownToc.1d16b109.css","assets/vendor.6548d360.js","assets/vue-scrollto.6b4fda56.js","assets/VBreadcrumb.b45a5a1c.js","assets/VBreadcrumb.0fe49153.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }], "props": true }, { "path": "/error", "component": () => __vitePreload(() => import("./error.7a419dc8.js"), true ? ["assets/error.7a419dc8.js","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js"] : void 0), "children": [{ "name": "error", "path": "", "component": () => __vitePreload(() => import("./index.393a8f45.js"), true ? [] : void 0), "props": true, "redirect": { "name": "error-page-1" } }, { "name": "error-page-1", "path": "page-1", "component": () => __vitePreload(() => import("./page-1.1fef682d.js"), true ? ["assets/page-1.1fef682d.js","assets/page-1.28003b1a.css","assets/SVGErrorPlaceholder.097875b3.js","assets/vendor.6548d360.js"] : void 0), "props": true }, { "name": "error-page-2", "path": "page-2", "component": () => __vitePreload(() => import("./page-2.1f53213f.js"), true ? ["assets/page-2.1f53213f.js","assets/page-1.28003b1a.css","assets/error-2.ea43b3eb.js","assets/vendor.6548d360.js"] : void 0), "props": true }, { "name": "error-page-3", "path": "page-3", "component": () => __vitePreload(() => import("./page-3.4ef73f66.js"), true ? ["assets/page-3.4ef73f66.js","assets/page-1.28003b1a.css","assets/vendor.6548d360.js"] : void 0), "props": true }, { "name": "error-page-4", "path": "page-4", "component": () => __vitePreload(() => import("./page-4.c3a382da.js"), true ? ["assets/page-4.c3a382da.js","assets/page-1.28003b1a.css","assets/vendor.6548d360.js"] : void 0), "props": true }, { "name": "error-page-5", "path": "page-5", "component": () => __vitePreload(() => import("./page-5.5b1e2fd2.js"), true ? ["assets/page-5.5b1e2fd2.js","assets/page-1.28003b1a.css","assets/vendor.6548d360.js"] : void 0), "props": true }], "props": true }, { "name": "inbox", "path": "/inbox", "component": () => __vitePreload(() => import("./inbox.4557b170.js"), true ? ["assets/inbox.4557b170.js","assets/inbox.e1110940.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/vuero-1.6aadf997.js","assets/useDropdown.145111f2.js","assets/via-placeholder.9af8280d.js","assets/responsive.0b9f8cd9.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css"] : void 0), "props": true }, { "name": "index", "path": "/", "component": _sfc_main$6, "props": true, "redirect": { "name": "app" } }, { "name": "marketing-1", "path": "/marketing-1", "component": () => __vitePreload(() => import("./marketing-1.070f721c.js"), true ? ["assets/marketing-1.070f721c.js","assets/marketing-1.f51deac5.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/app-2-dark.2a6348de.js","assets/app-2-dark.aed6cc51.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/responsive.0b9f8cd9.js","assets/vue-scrollto.6b4fda56.js"] : void 0), "props": true }, { "name": "marketing-2", "path": "/marketing-2", "component": () => __vitePreload(() => import("./marketing-2.0180064e.js"), true ? ["assets/marketing-2.0180064e.js","assets/marketing-1.f51deac5.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/app-2-dark.2a6348de.js","assets/app-2-dark.aed6cc51.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/responsive.0b9f8cd9.js","assets/vue-scrollto.6b4fda56.js"] : void 0), "props": true }, { "name": "marketing-3", "path": "/marketing-3", "component": () => __vitePreload(() => import("./marketing-3.4b59fca6.js"), true ? ["assets/marketing-3.4b59fca6.js","assets/marketing-1.f51deac5.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/app-2-dark.2a6348de.js","assets/app-2-dark.aed6cc51.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/responsive.0b9f8cd9.js","assets/vue-scrollto.6b4fda56.js"] : void 0), "props": true }, { "name": "messaging-v1", "path": "/messaging-v1", "component": () => __vitePreload(() => import("./messaging-v1.dffd36b9.js"), true ? ["assets/messaging-v1.dffd36b9.js","assets/messaging-v1.10142cf8.css","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/vendor.6548d360.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/panels.9ed80fb9.js","assets/userPopovers.0b86b3bb.js","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/NotificationsMobileDropdown.98d004af.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/sidebar.098cc062.js","assets/search-4-dark.fb3880a5.js","assets/layoutSwitcher.8d409c39.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true }, { "name": "messaging-v2", "path": "/messaging-v2", "component": () => __vitePreload(() => import("./messaging-v2.57da3564.js"), true ? ["assets/messaging-v2.57da3564.js","assets/messaging-v2.73b09953.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vuero-1.6aadf997.js","assets/Toolbar.cbd734d2.js","assets/panels.9ed80fb9.js","assets/ToolbarNotification.e103f93b.js","assets/useDropdown.145111f2.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css"] : void 0), "props": true }, { "name": "navbar", "path": "/navbar", "component": () => __vitePreload(() => import("./navbar.77150b55.js"), true ? ["assets/navbar.77150b55.js","assets/vendor.6548d360.js"] : void 0), "props": true }, { "path": "/sidebar", "component": () => __vitePreload(() => import("./sidebar.04c6b39d.js"), true ? ["assets/sidebar.04c6b39d.js","assets/vendor.6548d360.js"] : void 0), "children": [{ "path": "dashboards", "component": () => __vitePreload(() => import("./dashboards.543f120a.js"), true ? ["assets/dashboards.543f120a.js","assets/vendor.6548d360.js","assets/layoutSwitcher.8d409c39.js"] : void 0), "children": [{ "name": "sidebar-dashboards-analytics", "path": "analytics", "component": () => __vitePreload(() => import("./analytics.2bef9c9a.js"), true ? ["assets/analytics.2bef9c9a.js","assets/AnalyticsDashboard.5c57b475.js","assets/AnalyticsDashboard.998dd53f.css","assets/notificationList.cbf10ce3.js","assets/notificationList.e11ac579.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/vendor.6548d360.js","assets/followers.c0b11e85.js","assets/followers.35592f5a.css","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/UIWidgetToolbarFollowers.b9de412f.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/ContactWidget.4ef19c97.js","assets/ContactWidget.f4d7ac12.css","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/goalChart.dfe48889.js","assets/profitBarChart.d492afc3.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-banking-1", "path": "banking-1", "component": () => __vitePreload(() => import("./banking-1.e7786212.js"), true ? ["assets/banking-1.e7786212.js","assets/banking-1.85332e18.css","assets/UserPopoverContent.5da306fe.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/goalChart.dfe48889.js","assets/userPopovers.0b86b3bb.js","assets/groupedSocialCharts.45b95979.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-banking-2", "path": "banking-2", "component": () => __vitePreload(() => import("./banking-2.363db036.js"), true ? ["assets/banking-2.363db036.js","assets/banking-2.3b2a5968.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/tiny-slider.d87e9682.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-banking-3", "path": "banking-3", "component": () => __vitePreload(() => import("./banking-3.ab0619f0.js"), true ? ["assets/banking-3.ab0619f0.js","assets/banking-3.48000f2b.css","assets/vue3-apexcharts.common.94adc8f7.js","assets/vendor.6548d360.js","assets/useThemeColors.b71015d4.js","assets/profitBarChart.d492afc3.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-charts-apex", "path": "charts-apex", "component": () => __vitePreload(() => import("./charts-apex.7f1d2169.js"), true ? ["assets/charts-apex.7f1d2169.js","assets/dayjs.min.7cfaa8e2.js","assets/vendor.6548d360.js","assets/useThemeColors.b71015d4.js","assets/apex-formatters.f2b3d967.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-charts-billboardsjs", "path": "charts-billboardsjs", "component": () => __vitePreload(() => import("./charts-billboardsjs.0a6f1b43.js"), true ? ["assets/charts-billboardsjs.0a6f1b43.js","assets/VBillboardJS.a97b3f73.js","assets/VBillboardJS.3bd96733.css","assets/vendor.6548d360.js","assets/useThemeColors.b71015d4.js","assets/splineSimple.5eb03d2d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-company", "path": "company", "component": () => __vitePreload(() => import("./company.d12f559a.js"), true ? ["assets/company.d12f559a.js","assets/CompanyDashboard.a211cb9f.js","assets/CompanyDashboard.7c70d3dc.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VSwitchSegment.ee1417d0.js","assets/VSwitchSegment.e5843f27.css","assets/useThemeColors.b71015d4.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/index.c13a9b10.js","assets/moment.17f8281e.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-course", "path": "course", "component": () => __vitePreload(() => import("./course.76f1dd97.js"), true ? ["assets/course.76f1dd97.js","assets/course.b41509b5.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/vendor.6548d360.js","assets/VAction.e7ce9b1a.js","assets/VAction.a21725b1.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/FileTileDropdown.62f7ce91.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-crm", "path": "crm", "component": () => __vitePreload(() => import("./crm.05e2b857.js"), true ? ["assets/crm.05e2b857.js","assets/AnalyticsDashboard.5c57b475.js","assets/AnalyticsDashboard.998dd53f.css","assets/notificationList.cbf10ce3.js","assets/notificationList.e11ac579.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/vendor.6548d360.js","assets/followers.c0b11e85.js","assets/followers.35592f5a.css","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/UIWidgetToolbarFollowers.b9de412f.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/ContactWidget.4ef19c97.js","assets/ContactWidget.f4d7ac12.css","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/goalChart.dfe48889.js","assets/profitBarChart.d492afc3.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-ecommerce-1", "path": "ecommerce-1", "component": () => __vitePreload(() => import("./ecommerce-1.35717c8a.js"), true ? ["assets/ecommerce-1.35717c8a.js","assets/ecommerce-1.56f7c97f.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-flights", "path": "flights", "component": () => __vitePreload(() => import("./flights.56b2220a.js"), true ? ["assets/flights.56b2220a.js","assets/flights.6033b55c.css","assets/VCheckbox.486c8d05.js","assets/VCheckbox.b8116bc9.css","assets/vendor.6548d360.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/company1.6cff99f5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-food-delivery", "path": "food-delivery", "component": () => __vitePreload(() => import("./food-delivery.8e241fa6.js"), true ? ["assets/food-delivery.8e241fa6.js","assets/food-delivery.b54f485c.css","assets/menuList.eedebb36.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/ContactWidget.4ef19c97.js","assets/ContactWidget.f4d7ac12.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/UIWidgetToolbarIcon.7c1a99ff.js","assets/followers.35592f5a.css","assets/UIWidgetFollowerStats.3b047c4d.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/followers.c0b11e85.js","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VPlaceholderSection.d614fe7b.js","assets/VPlaceholderSection.e1b1502b.css","assets/tiny-slider.d87e9682.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-health", "path": "health", "component": () => __vitePreload(() => import("./health.e2fccfd5.js"), true ? ["assets/health.e2fccfd5.js","assets/health.6de55a1d.css","assets/UIWidgetToolbarFollowers.b9de412f.js","assets/followers.35592f5a.css","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VBillboardJS.a97b3f73.js","assets/VBillboardJS.3bd96733.css","assets/followers.c0b11e85.js","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/apex-formatters.f2b3d967.js","assets/dayjs.min.7cfaa8e2.js","assets/personalScoreGauge.107d1f23.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-hobbies", "path": "hobbies", "component": () => __vitePreload(() => import("./hobbies.06b1b96d.js"), true ? ["assets/hobbies.06b1b96d.js","assets/hobbies.c5c3d987.css","assets/ListWidgetTopicList.90994674.js","assets/ListWidgetTopicList.026c3bdc.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/vendor.6548d360.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/UIWidgetToolbarIcon.7c1a99ff.js","assets/followers.35592f5a.css","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconButton.f948e51d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-human-ressources", "path": "human-ressources", "component": () => __vitePreload(() => import("./human-ressources.58f62521.js"), true ? ["assets/human-ressources.58f62521.js","assets/human-ressources.cf3c96fa.css","assets/todoList.76b7e782.js","assets/todoList.126afced.css","assets/vendor.6548d360.js","assets/VAnimatedCheckbox.ef1a08f3.js","assets/VAnimatedCheckbox.cc0d6b92.css","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/UserCardDropdown.f26fcac6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards", "path": "", "component": () => __vitePreload(() => import("./index.aea841d8.js"), true ? ["assets/index.aea841d8.js","assets/CompanyDashboard.a211cb9f.js","assets/CompanyDashboard.7c70d3dc.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VSwitchSegment.ee1417d0.js","assets/VSwitchSegment.e5843f27.css","assets/useThemeColors.b71015d4.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/index.c13a9b10.js","assets/moment.17f8281e.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-influencer", "path": "influencer", "component": () => __vitePreload(() => import("./influencer.fb5bbb6b.js"), true ? ["assets/influencer.fb5bbb6b.js","assets/influencer.9990489d.css","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/vendor.6548d360.js","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/via-placeholder.9af8280d.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/groupedCircleCharts.4e0c4118.js","assets/groupedCircleCharts.ec99efcd.css","assets/useThemeColors.b71015d4.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/groupedSocialCharts.45b95979.js","assets/apex-formatters.f2b3d967.js","assets/dayjs.min.7cfaa8e2.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-jobs", "path": "jobs", "component": () => __vitePreload(() => import("./jobs.8b490bdd.js"), true ? ["assets/jobs.8b490bdd.js","assets/jobs.a507a999.css","assets/vendor.6548d360.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VCheckbox.486c8d05.js","assets/VCheckbox.b8116bc9.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-personal-2", "path": "personal-2", "component": () => __vitePreload(() => import("./personal-2.c97b8a36.js"), true ? ["assets/personal-2.c97b8a36.js","assets/personal-2.f9f33739.css","assets/VPlaceholderSection.d614fe7b.js","assets/VPlaceholderSection.e1b1502b.css","assets/vendor.6548d360.js","assets/VAnimatedCheckbox.ef1a08f3.js","assets/VAnimatedCheckbox.cc0d6b92.css","assets/UserPopoverContent.5da306fe.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/userPopovers.0b86b3bb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-personal-3", "path": "personal-3", "component": () => __vitePreload(() => import("./personal-3.fc3638df.js"), true ? ["assets/personal-3.fc3638df.js","assets/personal-3.9e184732.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/VAvatarStack.d8a5f95e.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VBillboardJS.a97b3f73.js","assets/VBillboardJS.3bd96733.css","assets/vue3-apexcharts.common.94adc8f7.js","assets/useThemeColors.b71015d4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-sales", "path": "sales", "component": () => __vitePreload(() => import("./sales.d4b69d00.js"), true ? ["assets/sales.d4b69d00.js","assets/sales.a258b24b.css","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/vendor.6548d360.js","assets/VBillboardJS.a97b3f73.js","assets/VBillboardJS.3bd96733.css","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/revenueAreaChart.fbe33e35.js","assets/useThemeColors.b71015d4.js","assets/personalScoreGauge.107d1f23.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-soccer", "path": "soccer", "component": () => __vitePreload(() => import("./soccer.5c41f2a2.js"), true ? ["assets/soccer.5c41f2a2.js","assets/soccer.5e5ad0f6.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-stocks", "path": "stocks", "component": () => __vitePreload(() => import("./stocks.38a84b6a.js"), true ? ["assets/stocks.38a84b6a.js","assets/stocks.286fe3c2.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/vendor.6548d360.js","assets/useDropdown.145111f2.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-video", "path": "video", "component": () => __vitePreload(() => import("./video.0fe8a55f.js"), true ? ["assets/video.0fe8a55f.js","assets/video.4aaf8189.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-creative", "path": "widgets-sample-creative", "component": () => __vitePreload(() => import("./widgets-sample-creative.fe4b2356.js"), true ? ["assets/widgets-sample-creative.fe4b2356.js","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/UIWidgetToolbarIcon.7c1a99ff.js","assets/followers.35592f5a.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/UIWidgetFollowerStats.3b047c4d.js","assets/followers.c0b11e85.js","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/ContactWidget.4ef19c97.js","assets/ContactWidget.f4d7ac12.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-list", "path": "widgets-sample-list", "component": () => __vitePreload(() => import("./widgets-sample-list.9f18c91a.js"), true ? ["assets/widgets-sample-list.9f18c91a.js","assets/widgets-sample-list.be9ae61a.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/ListWidgetTopicList.90994674.js","assets/ListWidgetTopicList.026c3bdc.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/todoList.76b7e782.js","assets/todoList.126afced.css","assets/VAnimatedCheckbox.ef1a08f3.js","assets/VAnimatedCheckbox.cc0d6b92.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-stats", "path": "widgets-sample-stats", "component": () => __vitePreload(() => import("./widgets-sample-stats.324a708e.js"), true ? ["assets/widgets-sample-stats.324a708e.js","assets/widgets-sample-stats.30e9acb6.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/groupedCircleCharts.4e0c4118.js","assets/groupedCircleCharts.ec99efcd.css","assets/useThemeColors.b71015d4.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/revenueAreaChart.fbe33e35.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-widgets-sample-ui", "path": "widgets-sample-ui", "component": () => __vitePreload(() => import("./widgets-sample-ui.b4f8a033.js"), true ? ["assets/widgets-sample-ui.b4f8a033.js","assets/followers.35592f5a.css","assets/notificationList.cbf10ce3.js","assets/notificationList.e11ac579.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/UIWidgetToolbarIcon.7c1a99ff.js","assets/menuList.eedebb36.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/UIWidgetToolbarFollowers.b9de412f.js","assets/VAvatarStack.d8a5f95e.js","assets/UIWidget.6c4793e7.js","assets/UIWidget.0f1383d7.css","assets/VBillboardJS.a97b3f73.js","assets/VBillboardJS.3bd96733.css","assets/followers.c0b11e85.js","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/vue3-apexcharts.common.94adc8f7.js","assets/personalScoreGauge.107d1f23.js","assets/useThemeColors.b71015d4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-dashboards-writer", "path": "writer", "component": () => __vitePreload(() => import("./writer.dfa8619f.js"), true ? ["assets/writer.dfa8619f.js","assets/writer.a65be39b.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }], "props": true, "meta": { "requiresAuth": true } }, { "name": "sidebar", "path": "", "component": () => __vitePreload(() => import("./index.e139264e.js"), true ? ["assets/index.e139264e.js","assets/vendor.6548d360.js"] : void 0), "props": true }, { "path": "layouts", "component": () => __vitePreload(() => import("./layouts.b51c5a09.js"), true ? ["assets/layouts.b51c5a09.js","assets/vendor.6548d360.js","assets/layoutSwitcher.8d409c39.js"] : void 0), "children": [{ "name": "sidebar-layouts-action-page-1", "path": "action-page-1", "component": () => __vitePreload(() => import("./action-page-1.4b9d537f.js"), true ? ["assets/action-page-1.4b9d537f.js","assets/action-page-1.9f06b2c3.css","assets/UserPopoverContent.5da306fe.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/sleep.2a252ff4.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/userPopovers.0b86b3bb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-action-page-2", "path": "action-page-2", "component": () => __vitePreload(() => import("./action-page-2.cb256ab7.js"), true ? ["assets/action-page-2.cb256ab7.js","assets/action-page-2.81a6bdb3.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/UserPopoverContent.5da306fe.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/sleep.2a252ff4.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/userPopovers.0b86b3bb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-1", "path": "form-layouts-1", "component": () => __vitePreload(() => import("./form-layouts-1.e1f6ded9.js"), true ? ["assets/form-layouts-1.e1f6ded9.js","assets/form-layouts-1.e7888888.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-2", "path": "form-layouts-2", "component": () => __vitePreload(() => import("./form-layouts-2.6d76d28f.js"), true ? ["assets/form-layouts-2.6d76d28f.js","assets/form-layouts-2.41fd1693.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-3", "path": "form-layouts-3", "component": () => __vitePreload(() => import("./form-layouts-3.0222c634.js"), true ? ["assets/form-layouts-3.0222c634.js","assets/form-layouts-3.f140e33e.css","assets/VCheckbox.486c8d05.js","assets/VCheckbox.b8116bc9.css","assets/vendor.6548d360.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-4", "path": "form-layouts-4", "component": () => __vitePreload(() => import("./form-layouts-4.46b26eac.js"), true ? ["assets/form-layouts-4.46b26eac.js","assets/form-layouts-4.c06e91d3.css","assets/UserPopoverContent.5da306fe.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VCheckbox.486c8d05.js","assets/VCheckbox.b8116bc9.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/userPopovers.0b86b3bb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-form-layouts-5", "path": "form-layouts-5", "component": () => __vitePreload(() => import("./form-layouts-5.b78c1b0d.js"), true ? ["assets/form-layouts-5.b78c1b0d.js","assets/form-layouts-5.850327a2.css","assets/VIconButton.f948e51d.js","assets/vendor.6548d360.js","assets/VSwitchSegment.ee1417d0.js","assets/VSwitchSegment.e5843f27.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vue-scrollto.6b4fda56.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-1", "path": "grid-cards-1", "component": () => __vitePreload(() => import("./grid-cards-1.c568e4ea.js"), true ? ["assets/grid-cards-1.c568e4ea.js","assets/grid-cards-1.a4f29eda.css","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/index.5f5b7c31.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-2", "path": "grid-cards-2", "component": () => __vitePreload(() => import("./grid-cards-2.b8c4e145.js"), true ? ["assets/grid-cards-2.b8c4e145.js","assets/grid-cards-2.05c81a2a.css","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/UserCardDropdown.f26fcac6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-3-dark.7ce838c0.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-3", "path": "grid-cards-3", "component": () => __vitePreload(() => import("./grid-cards-3.ca8b24c5.js"), true ? ["assets/grid-cards-3.ca8b24c5.js","assets/grid-cards-3.dc833209.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-3-dark.7ce838c0.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-cards-4", "path": "grid-cards-4", "component": () => __vitePreload(() => import("./grid-cards-4.d93e293d.js"), true ? ["assets/grid-cards-4.d93e293d.js","assets/grid-cards-4.f1e745b4.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-tiles-1", "path": "grid-tiles-1", "component": () => __vitePreload(() => import("./grid-tiles-1.922e1d5c.js"), true ? ["assets/grid-tiles-1.922e1d5c.js","assets/grid-tiles-1.8a1e6db2.css","assets/UserCardDropdown.f26fcac6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/vendor.6548d360.js","assets/useDropdown.145111f2.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-6-dark.b48abad5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-tiles-2", "path": "grid-tiles-2", "component": () => __vitePreload(() => import("./grid-tiles-2.56166754.js"), true ? ["assets/grid-tiles-2.56166754.js","assets/grid-tiles-2.bd0a0bd9.css","assets/FileTileDropdown.62f7ce91.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/vendor.6548d360.js","assets/useDropdown.145111f2.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-tiles-3", "path": "grid-tiles-3", "component": () => __vitePreload(() => import("./grid-tiles-3.2631ab4b.js"), true ? ["assets/grid-tiles-3.2631ab4b.js","assets/grid-tiles-3.e2c3bc07.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-6-dark.b48abad5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-1", "path": "grid-users-1", "component": () => __vitePreload(() => import("./grid-users-1.f1c6f9e7.js"), true ? ["assets/grid-users-1.f1c6f9e7.js","assets/grid-users-1.859e16e3.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-2", "path": "grid-users-2", "component": () => __vitePreload(() => import("./grid-users-2.383320c9.js"), true ? ["assets/grid-users-2.383320c9.js","assets/grid-users-2.5f682cb7.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-3", "path": "grid-users-3", "component": () => __vitePreload(() => import("./grid-users-3.becf9ef8.js"), true ? ["assets/grid-users-3.becf9ef8.js","assets/grid-users-3.dc1311b1.css","assets/CircleChart.fbc0c236.js","assets/CircleChart.9149f76f.css","assets/vendor.6548d360.js","assets/VPeity.6c42beba.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-5-dark.23499973.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-grid-users-4", "path": "grid-users-4", "component": () => __vitePreload(() => import("./grid-users-4.7f7d753a.js"), true ? ["assets/grid-users-4.7f7d753a.js","assets/grid-users-4.c6eff8cd.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/UserCardDropdown.f26fcac6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-5-dark.23499973.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts", "path": "", "component": () => __vitePreload(() => import("./index.9ecf27c1.js"), true ? ["assets/index.9ecf27c1.js","assets/index.8caac481.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-1-dark.119fdb96.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-kanban-board", "path": "kanban-board", "component": () => __vitePreload(() => import("./kanban-board.f35080e7.js"), true ? ["assets/kanban-board.f35080e7.js","assets/kanban-board.16bc670c.css","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/vendor.6548d360.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-1", "path": "list-datatable-1", "component": () => __vitePreload(() => import("./list-datatable-1.390971f1.js"), true ? ["assets/list-datatable-1.390971f1.js","assets/VSimpleDatatables.f197f002.js","assets/VSimpleDatatables.fc85b97e.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-2", "path": "list-datatable-2", "component": () => __vitePreload(() => import("./list-datatable-2.7438e8ae.js"), true ? ["assets/list-datatable-2.7438e8ae.js","assets/VSimpleDatatables.f197f002.js","assets/VSimpleDatatables.fc85b97e.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-3", "path": "list-datatable-3", "component": () => __vitePreload(() => import("./list-datatable-3.00fdd78f.js"), true ? ["assets/list-datatable-3.00fdd78f.js","assets/VSimpleDatatables.f197f002.js","assets/VSimpleDatatables.fc85b97e.css","assets/vendor.6548d360.js","assets/WidgetDropdown.be0631d8.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-datatable-4", "path": "list-datatable-4", "component": () => __vitePreload(() => import("./list-datatable-4.2608a99e.js"), true ? ["assets/list-datatable-4.2608a99e.js","assets/VSimpleDatatables.f197f002.js","assets/VSimpleDatatables.fc85b97e.css","assets/vendor.6548d360.js","assets/VPlaceholderSection.d614fe7b.js","assets/VPlaceholderSection.e1b1502b.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-flex-1", "path": "list-flex-1", "component": () => __vitePreload(() => import("./list-flex-1.d42e8ac9.js"), true ? ["assets/list-flex-1.d42e8ac9.js","assets/list-flex-1.3b8eea5a.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/FlexTableDropdown.bdf5c6d6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-flex-2", "path": "list-flex-2", "component": () => __vitePreload(() => import("./list-flex-2.be5def7a.js"), true ? ["assets/list-flex-2.be5def7a.js","assets/list-flex-1.3b8eea5a.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-flex-3", "path": "list-flex-3", "component": () => __vitePreload(() => import("./list-flex-3.89ca1f96.js"), true ? ["assets/list-flex-3.89ca1f96.js","assets/list-flex-1.3b8eea5a.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-4-dark.fb3880a5.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-view-2", "path": "list-view-2", "component": () => __vitePreload(() => import("./list-view-2.aa56fb3e.js"), true ? ["assets/list-view-2.aa56fb3e.js","assets/list-view-2.8c9c5e92.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-view-3", "path": "list-view-3", "component": () => __vitePreload(() => import("./list-view-3.7e5a66c7.js"), true ? ["assets/list-view-3.7e5a66c7.js","assets/list-view-3.6558f1ad.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VIconButton.f948e51d.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-3-dark.7ce838c0.js","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-list-view-4", "path": "list-view-4", "component": () => __vitePreload(() => import("./list-view-4.f441fc07.js"), true ? ["assets/list-view-4.f441fc07.js","assets/list-view-4.b157cfc9.css","assets/VFlexPagination.ec5e6993.js","assets/VFlex.c8e24668.js","assets/VFlex.0f74d4a7.css","assets/vendor.6548d360.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/search-3-dark.7ce838c0.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-1", "path": "onboarding-page-1", "component": () => __vitePreload(() => import("./onboarding-page-1.62b7e6af.js"), true ? ["assets/onboarding-page-1.62b7e6af.js","assets/onboarding-page-1.6a0d56e7.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-2", "path": "onboarding-page-2", "component": () => __vitePreload(() => import("./onboarding-page-2.5138f1d7.js"), true ? ["assets/onboarding-page-2.5138f1d7.js","assets/onboarding-page-2.17d72362.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-3", "path": "onboarding-page-3", "component": () => __vitePreload(() => import("./onboarding-page-3.1c03b0b7.js"), true ? ["assets/onboarding-page-3.1c03b0b7.js","assets/onboarding-page-3.6798114f.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-4", "path": "onboarding-page-4", "component": () => __vitePreload(() => import("./onboarding-page-4.abddf744.js"), true ? ["assets/onboarding-page-4.abddf744.js","assets/onboarding-page-4.e6d249e5.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-page-5", "path": "onboarding-page-5", "component": () => __vitePreload(() => import("./onboarding-page-5.48d1d699.js"), true ? ["assets/onboarding-page-5.48d1d699.js","assets/onboarding-page-5.d479e4d8.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-onboarding-welcome", "path": "onboarding-welcome", "component": () => __vitePreload(() => import("./onboarding-welcome.162d96a6.js"), true ? ["assets/onboarding-welcome.162d96a6.js","assets/onboarding-page-3.6798114f.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-1", "path": "placeload-1", "component": () => __vitePreload(() => import("./placeload-1.047a98a3.js"), true ? ["assets/placeload-1.047a98a3.js","assets/placeload-1.7244cd3e.css","assets/vendor.6548d360.js","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/VPlaceloadAvatar.a1323f34.js","assets/VPlaceloadAvatar.601a2c90.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-2", "path": "placeload-2", "component": () => __vitePreload(() => import("./placeload-2.6219a765.js"), true ? ["assets/placeload-2.6219a765.js","assets/index.8caac481.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/vendor.6548d360.js","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/VPlaceloadAvatar.a1323f34.js","assets/VPlaceloadAvatar.601a2c90.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-3", "path": "placeload-3", "component": () => __vitePreload(() => import("./placeload-3.01d2a683.js"), true ? ["assets/placeload-3.01d2a683.js","assets/grid-users-1.859e16e3.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/vendor.6548d360.js","assets/VPlaceloadAvatar.a1323f34.js","assets/VPlaceloadAvatar.601a2c90.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-placeload-4", "path": "placeload-4", "component": () => __vitePreload(() => import("./placeload-4.da957b92.js"), true ? ["assets/placeload-4.da957b92.js","assets/grid-tiles-1.8a1e6db2.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/vendor.6548d360.js","assets/VPlaceloadAvatar.a1323f34.js","assets/VPlaceloadAvatar.601a2c90.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "path": "profile-edit", "component": () => __vitePreload(() => import("./profile-edit.5b62f8ec.js"), true ? ["assets/profile-edit.5b62f8ec.js","assets/profile-edit.342ab670.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js"] : void 0), "children": [{ "name": "sidebar-layouts-profile-edit-experience", "path": "experience", "component": () => __vitePreload(() => import("./experience.51d21ecd.js"), true ? ["assets/experience.51d21ecd.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/EditSettingItemDropdown.127a2714.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VFilePond.c8927e5b.js","assets/VFilePond.746fdb72.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-edit", "path": "", "component": () => __vitePreload(() => import("./index.9710b2a7.js"), true ? ["assets/index.9710b2a7.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIconButton.f948e51d.js","assets/VFilePond.c8927e5b.js","assets/VFilePond.746fdb72.css","assets/vuero-1.6aadf997.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-edit-settings", "path": "settings", "component": () => __vitePreload(() => import("./settings.63713e68.js"), true ? ["assets/settings.63713e68.js","assets/VSwitchBlock.3a146329.js","assets/VSwitchBlock.bb1f7f06.css","assets/vendor.6548d360.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-edit-skills", "path": "skills", "component": () => __vitePreload(() => import("./skills.834daefe.js"), true ? ["assets/skills.834daefe.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/EditSettingItemDropdown.127a2714.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/sleep.2a252ff4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }], "props": true }, { "name": "sidebar-layouts-profile-notifications", "path": "profile-notifications", "component": () => __vitePreload(() => import("./profile-notifications.c04827ee.js"), true ? ["assets/profile-notifications.c04827ee.js","assets/profile-notifications.8afef084.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-settings", "path": "profile-settings", "component": () => __vitePreload(() => import("./profile-settings.eef53519.js"), true ? ["assets/profile-settings.eef53519.js","assets/profile-settings.ea2cffa5.css","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-profile-view", "path": "profile-view", "component": () => __vitePreload(() => import("./profile-view.771419b2.js"), true ? ["assets/profile-view.771419b2.js","assets/profile-view.20d1bd6a.css","assets/VPeity.6c42beba.js","assets/vendor.6548d360.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VSwitchBlock.3a146329.js","assets/VSwitchBlock.bb1f7f06.css","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-details", "path": "projects-details", "component": () => __vitePreload(() => import("./projects-details.f3c06d38.js"), true ? ["assets/projects-details.f3c06d38.js","assets/projects-details.5fc741e0.css","assets/CircleChart.fbc0c236.js","assets/CircleChart.9149f76f.css","assets/vendor.6548d360.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/FileCardDropdown.ed362889.js","assets/VAvatarStack.d8a5f95e.js","assets/VIconButton.f948e51d.js","assets/panels.9ed80fb9.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-projects-1", "path": "projects-projects-1", "component": () => __vitePreload(() => import("./projects-projects-1.99b892f4.js"), true ? ["assets/projects-projects-1.99b892f4.js","assets/projects-projects-1.16c6713f.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/vendor.6548d360.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/ProjectsToolbar.bf856e55.js","assets/ProjectsToolbar.aa1aff74.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/company1.6cff99f5.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/FlexTableDropdown.bdf5c6d6.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VAvatarStack.d8a5f95e.js","assets/table.31d75fbb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-projects-2", "path": "projects-projects-2", "component": () => __vitePreload(() => import("./projects-projects-2.2ce7bb22.js"), true ? ["assets/projects-projects-2.2ce7bb22.js","assets/projects-projects-2.199e6342.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/ProjectsToolbar.bf856e55.js","assets/ProjectsToolbar.aa1aff74.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-projects-projects-3", "path": "projects-projects-3", "component": () => __vitePreload(() => import("./projects-projects-3.f83e71da.js"), true ? ["assets/projects-projects-3.f83e71da.js","assets/projects-projects-3.3683a007.css","assets/VAvatarStack.d8a5f95e.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/vendor.6548d360.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/CircleChart.fbc0c236.js","assets/CircleChart.9149f76f.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-saas-billing", "path": "saas-billing", "component": () => __vitePreload(() => import("./saas-billing.93470d83.js"), true ? ["assets/saas-billing.93470d83.js","assets/saas-billing.1bcde935.css","assets/vendor.6548d360.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VSwitchBlock.3a146329.js","assets/VSwitchBlock.bb1f7f06.css","assets/UserPopoverContent.5da306fe.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/userPopovers.0b86b3bb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-search-empty", "path": "search-empty", "component": () => __vitePreload(() => import("./search-empty.b81045dc.js"), true ? ["assets/search-empty.b81045dc.js","assets/search-empty.ada4e3f9.css","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-search-results", "path": "search-results", "component": () => __vitePreload(() => import("./search-results.c7474e20.js"), true ? ["assets/search-results.c7474e20.js","assets/search-empty.ada4e3f9.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VCheckbox.486c8d05.js","assets/VCheckbox.b8116bc9.css","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-utility-account-confirm", "path": "utility-account-confirm", "component": () => __vitePreload(() => import("./utility-account-confirm.9eb43aa0.js"), true ? ["assets/utility-account-confirm.9eb43aa0.js","assets/utility-account-confirm.a987798a.css","assets/VLoader.74e9a6e7.js","assets/VLoader.9a8a8544.css","assets/vendor.6548d360.js","assets/sleep.2a252ff4.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-utility-invoice", "path": "utility-invoice", "component": () => __vitePreload(() => import("./utility-invoice.e2610063.js"), true ? ["assets/utility-invoice.e2610063.js","assets/utility-invoice.1f1f6d1e.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/vendor.6548d360.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VField.b8c33879.js","assets/UserPopoverContent.5da306fe.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/userPopovers.0b86b3bb.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-layouts-utility-promotion", "path": "utility-promotion", "component": () => __vitePreload(() => import("./utility-promotion.3e9b5ab2.js"), true ? ["assets/utility-promotion.3e9b5ab2.js","assets/utility-promotion.fd5f0840.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VIconWrap.8350d40c.js","assets/VIconWrap.e2042529.css","assets/via-placeholder.9af8280d.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }], "props": true }, { "name": "sidebar-maps-1", "path": "maps-1", "component": () => __vitePreload(() => import("./maps-1.a6f5f5cf.js"), true ? ["assets/maps-1.a6f5f5cf.js","assets/MapsDashboard.bc0251df.js","assets/MapsDashboard.b2cc4199.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/useThemeColors.b71015d4.js","assets/Toolbar.cbd734d2.js","assets/panels.9ed80fb9.js","assets/ToolbarNotification.e103f93b.js","assets/useDropdown.145111f2.js","assets/layoutSwitcher.8d409c39.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }, { "name": "sidebar-maps-2", "path": "maps-2", "component": () => __vitePreload(() => import("./maps-2.3a5864aa.js"), true ? ["assets/maps-2.3a5864aa.js","assets/MapsDashboard.bc0251df.js","assets/MapsDashboard.b2cc4199.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/useThemeColors.b71015d4.js","assets/Toolbar.cbd734d2.js","assets/panels.9ed80fb9.js","assets/ToolbarNotification.e103f93b.js","assets/useDropdown.145111f2.js","assets/layoutSwitcher.8d409c39.js","assets/viewWrapper.d4aba839.js"] : void 0), "props": true }], "props": true }, { "name": "status", "path": "/status", "component": () => __vitePreload(() => import("./status.7e306861.js"), true ? ["assets/status.7e306861.js","assets/status.d2bdbe3c.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/via-placeholder.9af8280d.js"] : void 0), "props": true }, { "name": "wizard-v1", "path": "/wizard-v1", "component": () => __vitePreload(() => import("./wizard-v1.c17f37f4.js"), true ? ["assets/wizard-v1.c17f37f4.js","assets/wizard-v1.c28be5f6.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/sleep.2a252ff4.js","assets/VLoader.74e9a6e7.js","assets/VLoader.9a8a8544.css","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/dayjs.min.7cfaa8e2.js","assets/VIconButton.f948e51d.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/VFilePond.c8927e5b.js","assets/VFilePond.746fdb72.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/vuero-1.6aadf997.js","assets/useDropdown.145111f2.js"] : void 0), "props": true }, { "name": "auto-management", "path": "/auto-management", "component": () => __vitePreload(() => import("./index.8bf370ff.js"), true ? ["assets/index.8bf370ff.js","assets/index.20669bf4.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VSwitchBlock.3a146329.js","assets/VSwitchBlock.bb1f7f06.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/moment.17f8281e.js","assets/Summary.9e392a4d.js"] : void 0), "props": true }, { "name": "claims", "path": "/claims", "component": () => __vitePreload(() => import("./index.694d3a94.js"), true ? ["assets/index.694d3a94.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/error-2.ea43b3eb.js"] : void 0), "props": true }, { "name": "documents", "path": "/documents", "component": () => __vitePreload(() => import("./index.13dd4d60.js"), true ? ["assets/index.13dd4d60.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VPlaceholderPage.bdc25b05.js","assets/VPlaceholderPage.247b5532.css","assets/error-2.ea43b3eb.js"] : void 0), "props": true }, { "name": "reports-closedTurns", "path": "/reports/closedturns", "component": () => __vitePreload(() => import("./closedTurns.4bc60afb.js"), true ? ["assets/closedTurns.4bc60afb.js","assets/closedTurns.957825c1.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/index.c13a9b10.js","assets/moment.17f8281e.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true }, { "name": "reports-closing", "path": "/reports/closing", "component": () => __vitePreload(() => import("./closing.cc4f3551.js"), true ? ["assets/closing.cc4f3551.js","assets/closedTurns.957825c1.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/index.c13a9b10.js","assets/moment.17f8281e.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true }, { "name": "reports", "path": "/reports", "component": () => __vitePreload(() => import("./index.7d1bcc2c.js"), true ? ["assets/index.7d1bcc2c.js","assets/closedTurns.957825c1.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/VLoader.74e9a6e7.js","assets/VLoader.9a8a8544.css","assets/index.c13a9b10.js","assets/moment.17f8281e.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-1", "path": "/starters/navbar-blank-page-1", "component": () => __vitePreload(() => import("./navbar-blank-page-1.4eeb123c.js"), true ? ["assets/navbar-blank-page-1.4eeb123c.js","assets/NavbarLayout.cfb80182.js","assets/NavbarLayout.2637606c.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-2", "path": "/starters/navbar-blank-page-2", "component": () => __vitePreload(() => import("./navbar-blank-page-2.b7e1e12f.js"), true ? ["assets/navbar-blank-page-2.b7e1e12f.js","assets/NavbarLayout.cfb80182.js","assets/NavbarLayout.2637606c.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-3", "path": "/starters/navbar-blank-page-3", "component": () => __vitePreload(() => import("./navbar-blank-page-3.e7fc6a0f.js"), true ? ["assets/navbar-blank-page-3.e7fc6a0f.js","assets/NavbarLayout.cfb80182.js","assets/NavbarLayout.2637606c.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-4", "path": "/starters/navbar-blank-page-4", "component": () => __vitePreload(() => import("./navbar-blank-page-4.e5f72663.js"), true ? ["assets/navbar-blank-page-4.e5f72663.js","assets/NavbarDropdownLayout.fbb48f23.js","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-5", "path": "/starters/navbar-blank-page-5", "component": () => __vitePreload(() => import("./navbar-blank-page-5.9cd0c7a7.js"), true ? ["assets/navbar-blank-page-5.9cd0c7a7.js","assets/NavbarDropdownLayout.fbb48f23.js","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Navbar.9ff33e3e.js","assets/Navbar.8d568928.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-6", "path": "/starters/navbar-blank-page-6", "component": () => __vitePreload(() => import("./navbar-blank-page-6.4f20c48f.js"), true ? ["assets/navbar-blank-page-6.4f20c48f.js","assets/NavbarSearchLayout.650436ee.js","assets/NavbarSearchLayout.f0b6c548.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/VAvatarStack.d8a5f95e.js","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-7", "path": "/starters/navbar-blank-page-7", "component": () => __vitePreload(() => import("./navbar-blank-page-7.3c3b34de.js"), true ? ["assets/navbar-blank-page-7.3c3b34de.js","assets/NavbarSearchLayout.650436ee.js","assets/NavbarSearchLayout.f0b6c548.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/VAvatarStack.d8a5f95e.js","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-navbar-blank-page-8", "path": "/starters/navbar-blank-page-8", "component": () => __vitePreload(() => import("./navbar-blank-page-8.df3b1b9c.js"), true ? ["assets/navbar-blank-page-8.df3b1b9c.js","assets/NavbarSearchLayout.650436ee.js","assets/NavbarSearchLayout.f0b6c548.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/VAvatarStack.d8a5f95e.js","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/ProjectsQuickDropdown.2e79c221.js","assets/NotificationsMobileDropdown.98d004af.js","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-1", "path": "/starters/sidebar-blank-page-1", "component": () => __vitePreload(() => import("./sidebar-blank-page-1.886d44c4.js"), true ? ["assets/sidebar-blank-page-1.886d44c4.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-2", "path": "/starters/sidebar-blank-page-2", "component": () => __vitePreload(() => import("./sidebar-blank-page-2.c8552c4b.js"), true ? ["assets/sidebar-blank-page-2.c8552c4b.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-3", "path": "/starters/sidebar-blank-page-3", "component": () => __vitePreload(() => import("./sidebar-blank-page-3.78c1673f.js"), true ? ["assets/sidebar-blank-page-3.78c1673f.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-4", "path": "/starters/sidebar-blank-page-4", "component": () => __vitePreload(() => import("./sidebar-blank-page-4.3c9f821d.js"), true ? ["assets/sidebar-blank-page-4.3c9f821d.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-5", "path": "/starters/sidebar-blank-page-5", "component": () => __vitePreload(() => import("./sidebar-blank-page-5.0b7b5d05.js"), true ? ["assets/sidebar-blank-page-5.0b7b5d05.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-6", "path": "/starters/sidebar-blank-page-6", "component": () => __vitePreload(() => import("./sidebar-blank-page-6.6cf770ae.js"), true ? ["assets/sidebar-blank-page-6.6cf770ae.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sidebar-blank-page-7", "path": "/starters/sidebar-blank-page-7", "component": () => __vitePreload(() => import("./sidebar-blank-page-7.50a07360.js"), true ? ["assets/sidebar-blank-page-7.50a07360.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css"] : void 0), "props": true }, { "name": "starters-sideblock-blank-page-1", "path": "/starters/sideblock-blank-page-1", "component": () => __vitePreload(() => import("./sideblock-blank-page-1.8d313d4e.js"), true ? ["assets/sideblock-blank-page-1.8d313d4e.js","assets/SideblockLayout.c992c7b1.js","assets/SideblockLayout.432d8433.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/NotificationsMobileDropdown.98d004af.js"] : void 0), "props": true }, { "name": "starters-sideblock-blank-page-2", "path": "/starters/sideblock-blank-page-2", "component": () => __vitePreload(() => import("./sideblock-blank-page-2.8aae5528.js"), true ? ["assets/sideblock-blank-page-2.8aae5528.js","assets/SideblockLayout.c992c7b1.js","assets/SideblockLayout.432d8433.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/NotificationsMobileDropdown.98d004af.js"] : void 0), "props": true }, { "name": "starters-sideblock-blank-page-3", "path": "/starters/sideblock-blank-page-3", "component": () => __vitePreload(() => import("./sideblock-blank-page-3.f63427a0.js"), true ? ["assets/sideblock-blank-page-3.f63427a0.js","assets/SideblockLayout.c992c7b1.js","assets/SideblockLayout.432d8433.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/NotificationsMobileDropdown.98d004af.js"] : void 0), "props": true }, { "name": "starters-sideblock-blank-page-4", "path": "/starters/sideblock-blank-page-4", "component": () => __vitePreload(() => import("./sideblock-blank-page-4.251e0a77.js"), true ? ["assets/sideblock-blank-page-4.251e0a77.js","assets/SideblockLayout.c992c7b1.js","assets/SideblockLayout.432d8433.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/ToolbarNotification.e103f93b.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/LayoutsMobileSubsidebar.1ae070f2.js","assets/LayoutsMobileSubsidebar.366fad01.css","assets/VModal.8c95aa77.js","assets/VModal.de421565.css","assets/layoutSwitcher.8d409c39.js","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/NotificationsMobileDropdown.98d004af.js"] : void 0), "props": true }, { "name": "auto-management-components-Summary", "path": "/auto-management/components/summary", "component": () => __vitePreload(() => import("./Summary.9e392a4d.js"), true ? ["assets/Summary.9e392a4d.js","assets/vendor.6548d360.js"] : void 0), "props": true }, { "name": "reports-components-SelectSponsors", "path": "/reports/components/selectsponsors", "component": () => __vitePreload(() => import("./SelectSponsors.0c55f655.js"), true ? ["assets/SelectSponsors.0c55f655.js","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/vendor.6548d360.js"] : void 0), "props": true }, { "name": "users-config", "path": "/users/config", "component": () => __vitePreload(() => import("./index.46bdf25f.js"), true ? ["assets/index.46bdf25f.js","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js","assets/index.esm.8b858c3a.js"] : void 0), "props": true }, { "name": "users-management", "path": "/users/management", "component": () => __vitePreload(() => import("./index.df20a47d.js"), true ? ["assets/index.df20a47d.js","assets/index.5fd329b9.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VTag.f234897b.js","assets/VTag.3926743a.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/index.c13a9b10.js","assets/moment.17f8281e.js"] : void 0), "props": true, "meta": { "requiresAuth": true } }, { "name": "users-form-id", "path": "/users/form/:id", "component": () => __vitePreload(() => import("./_id_.dfda31be.js"), true ? ["assets/_id_.dfda31be.js","assets/_id_.eb47ef30.css","assets/SidebarLayout.6399bc9d.js","assets/SidebarLayout.e3d32a81.css","assets/UserProfileDropdown.c528b802.js","assets/UserProfileDropdown.f7623132.css","assets/viewWrapper.d4aba839.js","assets/vendor.6548d360.js","assets/VAvatar.08652fea.js","assets/VAvatar.c5fd7dc4.css","assets/via-placeholder.9af8280d.js","assets/VProgress.5bff1011.js","assets/VProgress.8907e3a0.css","assets/panels.9ed80fb9.js","assets/VDropdown.38fc5e7d.js","assets/VDropdown.4bffdbfa.css","assets/VIcon.de064b10.js","assets/useDropdown.145111f2.js","assets/VIconButton.f948e51d.js","assets/VPageContent.f47e1c5e.js","assets/VPageContent.1c01389d.css","assets/Toolbar.cbd734d2.js","assets/TaskPanel.a47df64e.js","assets/TaskPanel.ee531eba.css","assets/FileCardDropdown.ed362889.js","assets/SearchPanel.54ae1913.js","assets/SearchPanel.42b4fc7c.css","assets/UserPopoverContent.5da306fe.js","assets/VBlock.64333f78.js","assets/VBlock.1200d85e.css","assets/VIconBox.298b3a59.js","assets/VIconBox.5ddb8f32.css","assets/VField.b8c33879.js","assets/VControl.eb555562.js","assets/VControl.c257586f.css","assets/AnimatedLogo.9189a8f1.js","assets/AnimatedLogo.43023fa7.css","assets/userPopovers.0b86b3bb.js","assets/LanguagesPanel.b7b20087.js","assets/LanguagesPanel.c8df9243.css","assets/Sidebar.14a911d1.js","assets/Sidebar.06c3f186.css","assets/VPlaceloadText.2b6ef8c1.js","assets/VPlaceloadText.610dec75.css","assets/VFlexTable.b8a1fcae.js","assets/VFlexTable.df1b5a4a.css","assets/index.c13a9b10.js","assets/moment.17f8281e.js","assets/useNotyf.8a48e815.js","assets/useThemeColors.b71015d4.js"] : void 0), "props": true, "meta": { "requiresAuth": true } }, { "name": "reports-tables-acceso-salud", "path": "/reports/tables/acceso-salud", "component": () => __vitePreload(() => import("./index.02a70e50.js"), true ? [] : void 0), "props": true }, { "name": "reports-tables-aon-explorer", "path": "/reports/tables/aon-explorer", "component": () => __vitePreload(() => import("./index.29cd7fdd.js"), true ? [] : void 0), "props": true }, { "name": "reports-tables-automarsh", "path": "/reports/tables/automarsh", "component": () => __vitePreload(() => import("./index.324d2ea5.js"), true ? [] : void 0), "props": true }, { "name": "reports-tables-federacion", "path": "/reports/tables/federacion", "component": () => __vitePreload(() => import("./index.29e51729.js"), true ? [] : void 0), "props": true }, { "name": "reports-tables-herradura", "path": "/reports/tables/herradura", "component": () => __vitePreload(() => import("./index.82da9e32.js"), true ? [] : void 0), "props": true }, { "name": "reports-tables-suburbia", "path": "/reports/tables/suburbia", "component": () => __vitePreload(() => import("./index.e6ec2aca.js"), true ? [] : void 0), "props": true }, { "name": "all", "path": "/:all(.*)*", "component": () => __vitePreload(() => import("./_...all_.eb69ce71.js"), true ? ["assets/_...all_.eb69ce71.js","assets/page-1.28003b1a.css","assets/MinimalLayout.a3e60ebf.js","assets/vendor.6548d360.js","assets/SVGErrorPlaceholder.097875b3.js"] : void 0), "props": true }];
function createRouter() {
  const router = createRouter$1({
    history: createWebHistory(),
    routes
  });
  router.beforeEach(() => {
    nprogress$1.exports.start();
  });
  router.afterEach(() => {
    nprogress$1.exports.done();
  });
  return router;
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: {
    radius: { default: void 0 },
    color: { default: void 0 },
    elevated: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const cardRadius = computed(() => {
      if (props.radius === "smooth") {
        return "s-card";
      } else if (props.radius === "rounded") {
        return "l-card";
      }
      return "r-card";
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(cardRadius), __props.elevated && "is-raised", props.color && `is-${props.color}`])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    align: { default: void 0 },
    addons: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["buttons", [props.addons && "has-addons", props.align && `is-${props.align}`]])
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const CssUnitRe = /(\d*\.?\d+)\s?(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%)/;
var VPlaceload_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    width: { default: "100%" },
    height: { default: "10px" },
    mobileWidth: { default: void 0 },
    mobileHeight: { default: void 0 },
    disabled: { type: Boolean },
    centered: { type: Boolean }
  },
  setup(__props) {
    var _a, _b;
    const props = __props;
    useCssVars((_ctx) => ({
      "dd2dd28a": props.width,
      "fc2a725c": props.height,
      "44d1027a": unref(mobileWidthValue),
      "c789998a": unref(mobileHeightValue)
    }));
    const mobileWidthValue = (_a = props.mobileWidth) != null ? _a : props.width;
    const mobileHeightValue = (_b = props.mobileHeight) != null ? _b : props.height;
    if (props.width.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${props.width}" width. Should be a valid css unit value.`);
    }
    if (props.height.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${props.height}" height. Should be a valid css unit value.`);
    }
    if (mobileWidthValue.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${mobileWidthValue}" mobileWidth. Should be a valid css unit value.`);
    }
    if (mobileHeightValue.match(CssUnitRe) === null) {
      console.warn(`VPlaceload: invalid "${mobileHeightValue}" mobileHeight. Should be a valid css unit value.`);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["content-shape", [props.centered && "is-centered", !props.disabled && "loads"]])
      }, null, 2);
    };
  }
});
var __unplugin_components_7 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6922be4e"]]);
var VButton_vue_vue_type_style_index_0_lang = "";
const _sfc_main$2 = defineComponent({
  props: {
    to: {
      type: [Object, String],
      default: void 0
    },
    href: {
      type: String,
      default: void 0
    },
    icon: {
      type: String,
      default: void 0
    },
    iconCaret: {
      type: String,
      default: void 0
    },
    placeload: {
      type: String,
      default: void 0,
      validator: (value) => {
        if (value.match(CssUnitRe) === null) {
          console.warn(`VButton: invalid "${value}" placeload. Should be a valid css unit value.`);
        }
        return true;
      }
    },
    color: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([
          void 0,
          "primary",
          "info",
          "success",
          "warning",
          "danger",
          "white",
          "dark",
          "light"
        ].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" color. Should be primary, info, success, warning, danger, dark, light, white or undefined`);
          return false;
        }
        return true;
      }
    },
    size: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "big", "huge"].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" size. Should be big, huge or undefined`);
          return false;
        }
        return true;
      }
    },
    dark: {
      type: String,
      default: void 0,
      validator: (value) => {
        if ([void 0, "1", "2", "3", "4", "5", "6"].indexOf(value) === -1) {
          console.warn(`VButton: invalid "${value}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`);
          return false;
        }
        return true;
      }
    },
    rounded: {
      type: Boolean,
      default: false
    },
    bold: {
      type: Boolean,
      default: false
    },
    fullwidth: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    elevated: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    darkOutlined: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    lower: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    const classes = computed(() => {
      var _a;
      const defaultClasses = (_a = attrs == null ? void 0 : attrs.class) != null ? _a : [];
      return [
        ...defaultClasses,
        "button",
        "v-button",
        props.disabled && "is-disabled",
        props.rounded && "is-rounded",
        props.bold && "is-bold",
        props.size && `is-${props.size}`,
        props.lower && "is-lower",
        props.fullwidth && "is-fullwidth",
        props.outlined && "is-outlined",
        props.dark && `is-dark-bg-${props.dark}`,
        props.darkOutlined && "is-dark-outlined",
        props.raised && "is-raised",
        props.elevated && "is-elevated",
        props.loading && !props.placeload && "is-loading",
        props.color && `is-${props.color}`,
        props.light && "is-light"
      ];
    });
    const isIconify = computed(() => props.icon && props.icon.indexOf(":") !== -1);
    const isCaretIconify = computed(() => props.iconCaret && props.iconCaret.indexOf(":") !== -1);
    const getChildrens = () => {
      var _a;
      const childrens = [];
      let iconWrapper;
      if (isIconify.value) {
        const icon = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.icon
        });
        iconWrapper = h("span", { class: "icon" }, icon);
      } else if (props.icon) {
        const icon = h("i", { "aria-hidden": true, class: props.icon });
        iconWrapper = h("span", { class: "icon" }, icon);
      }
      let caretWrapper;
      if (isCaretIconify.value) {
        const caret = h("i", {
          "aria-hidden": true,
          class: "iconify",
          "data-icon": props.iconCaret
        });
        caretWrapper = h("span", { class: "caret" }, caret);
      } else if (props.iconCaret) {
        const caret = h("i", { "aria-hidden": true, class: props.iconCaret });
        caretWrapper = h("span", { class: "caret" }, caret);
      }
      if (iconWrapper) {
        childrens.push(iconWrapper);
      }
      if (props.placeload) {
        childrens.push(h(__unplugin_components_7, {
          width: props.placeload
        }));
      } else {
        childrens.push(h("span", (_a = slots.default) == null ? void 0 : _a.call(slots)));
      }
      if (caretWrapper) {
        childrens.push(caretWrapper);
      }
      return childrens;
    };
    return () => {
      if (props.to) {
        return h(RouterLink, __spreadProps(__spreadValues({}, attrs), {
          "aria-hidden": !!props.placeload && true,
          to: props.to,
          class: ["button", ...classes.value]
        }), {
          default: getChildrens
        });
      } else if (props.href) {
        return h("a", __spreadProps(__spreadValues({}, attrs), {
          "aria-hidden": !!props.placeload && true,
          href: props.href,
          class: classes.value
        }), {
          default: getChildrens
        });
      }
      return h("button", __spreadProps(__spreadValues({
        type: "button"
      }, attrs), {
        "aria-hidden": !!props.placeload && true,
        disabled: props.disabled,
        class: ["button", ...classes.value]
      }), {
        default: getChildrens
      });
    };
  }
});
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  let wb;
  let registration;
  const updateServiceWorker = async (reloadPage = true) => {
    {
      if (reloadPage) {
        wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
          if (event.isUpdate)
            window.location.reload();
        });
      }
      if (registration && registration.waiting) {
        await n(registration.waiting, { type: "SKIP_WAITING" });
      }
    }
  };
  if ("serviceWorker" in navigator) {
    wb = new v("/sw.js", { scope: "/" });
    wb.addEventListener("activated", (event) => {
      if (event.isUpdate)
        ;
      else
        onOfflineReady == null ? void 0 : onOfflineReady();
    });
    {
      const showSkipWaitingPrompt = () => {
        onNeedRefresh == null ? void 0 : onNeedRefresh();
      };
      wb.addEventListener("waiting", showSkipWaitingPrompt);
      wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
    }
    wb.register({ immediate }).then((r) => {
      registration = r;
      onRegistered == null ? void 0 : onRegistered(r);
    }).catch((e) => {
      onRegisterError == null ? void 0 : onRegisterError(e);
    });
  }
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisterError
  } = options;
  const needRefresh = ref(false);
  const offlineReady = ref(false);
  const updateServiceWorker = registerSW({
    immediate,
    onNeedRefresh() {
      needRefresh.value = true;
      onNeedRefresh == null ? void 0 : onNeedRefresh();
    },
    onOfflineReady() {
      offlineReady.value = true;
      onOfflineReady == null ? void 0 : onOfflineReady();
    },
    onRegistered,
    onRegisterError
  });
  return {
    updateServiceWorker,
    offlineReady,
    needRefresh
  };
}
var VReloadPrompt_vue_vue_type_style_index_0_scoped_true_lang = "";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "de": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " Est\xE1 disposto a trabalhar offline"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Uma nova vers\xE3o do ", _interpolate(_named("appName")), " est\xE1 dispon\xEDvel, clique no bot\xE3o Reload para atualiz\xE1-lo."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fechar"]);
        }
      },
      "en": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " is ready to work offline"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["A new version of ", _interpolate(_named("appName")), " is available, click on reload button to update."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Reload"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Close"]);
        }
      },
      "es-MX": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "es": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est\xE1 listo para trabajar sin conexi\xF3n"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Una nueva versi\xF3n de ", _interpolate(_named("appName")), " est\xE1 disponible, haga clic en el bot\xF3n Recarga para actualizar."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recarga"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Cerrar"]);
        }
      },
      "fr": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), " est pr\xEAt \xE0 \xEAtre utilis\xE9 hors ligne"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["Une nouvelle version de ", _interpolate(_named("appName")), " est disponible, cliquez sur le bouton Recharger pour la mettre \xE0 jour."]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Recharger"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Fermer"]);
        }
      },
      "zh-CN": {
        "offline-ready": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize([_interpolate(_named("appName")), "\u5DF2\u51C6\u5907\u597D\u8131\u673A\u5DE5\u4F5C"]);
        },
        "need-refresh": (ctx) => {
          const { normalize: _normalize, interpolate: _interpolate, named: _named } = ctx;
          return _normalize(["\u65B0\u7248\u672C\u7684", _interpolate(_named("appName")), "\u5DF2\u7ECF\u53EF\u7528\uFF0C\u70B9\u51FB\u91CD\u65B0\u52A0\u8F7D\u6309\u94AE\u6765\u66F4\u65B0\u3002"]);
        },
        "reload-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u91CD\u65B0\u52A0\u8F7D"]);
        },
        "close-button": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u5173\u95ED"]);
        }
      }
    }
  });
}
const _hoisted_1 = { class: "pwa-message" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = { key: 1 };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    appName: null
  },
  setup(__props) {
    const props = __props;
    const loading = ref(false);
    const { t } = useI18n();
    const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();
    const close = async () => {
      loading.value = false;
      offlineReady.value = false;
      needRefresh.value = false;
    };
    const update = async () => {
      loading.value = true;
      await updateServiceWorker();
      loading.value = false;
    };
    return (_ctx, _cache) => {
      const _component_VButton = _sfc_main$2;
      const _component_VButtons = _sfc_main$4;
      const _component_VCard = _sfc_main$5;
      return openBlock(), createBlock(Transition, { name: "from-bottom" }, {
        default: withCtx(() => [
          unref(offlineReady) || unref(needRefresh) ? (openBlock(), createBlock(_component_VCard, {
            key: 0,
            class: "pwa-toast",
            role: "alert",
            radius: "smooth"
          }, {
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_1, [
                unref(offlineReady) ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(t)("offline-ready", { appName: props.appName })), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, toDisplayString(unref(t)("need-refresh", { appName: props.appName })), 1))
              ]),
              createVNode(_component_VButtons, { align: "right" }, {
                default: withCtx(() => [
                  unref(needRefresh) ? (openBlock(), createBlock(_component_VButton, {
                    key: 0,
                    color: "primary",
                    icon: "ion:reload-outline",
                    loading: loading.value,
                    onClick: _cache[0] || (_cache[0] = () => update())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("reload-button")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading"])) : createCommentVNode("", true),
                  createVNode(_component_VButton, {
                    icon: "feather:x",
                    onClick: close
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("close-button")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        _: 1
      });
    };
  }
});
if (typeof block0 === "function")
  block0(_sfc_main$1);
var __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e594649a"]]);
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouterView = resolveComponent("RouterView");
  const _component_VReloadPrompt = __unplugin_components_0;
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode(_component_RouterView, null, {
      default: withCtx(({ Component }) => [
        createVNode(Transition, {
          name: "fade-slow",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(Component)))
          ]),
          _: 2
        }, 1024)
      ]),
      _: 1
    }),
    createVNode(_component_VReloadPrompt, { "app-name": "Creciendo Seguro" })
  ], 64);
}
var VueroApp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Iconify = Iconify$1.default || Iconify$1;
const collections = JSON.parse('[{"prefix":"ri","width":24,"height":24,"icons":{}},{"prefix":"ion","width":512,"height":512,"icons":{"reload-outline":{"body":"<path d=\\"M400 148l-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128\\" fill=\\"none\\" stroke=\\"currentColor\\" stroke-linecap=\\"round\\" stroke-miterlimit=\\"10\\" stroke-width=\\"32\\"/><path d=\\"M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"feather","width":24,"height":24,"icons":{"activity":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12h-4l-3 9L9 3l-3 9H2\\"/></g>"},"airplay":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1\\"/><path d=\\"M12 15l5 6H7l5-6z\\"/></g>"},"alert-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8v4\\"/><path d=\\"M12 16h.01\\"/></g>"},"alert-octagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/><path d=\\"M12 8v4\\"/><path d=\\"M12 16h.01\\"/></g>"},"alert-triangle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\"/><path d=\\"M12 9v4\\"/><path d=\\"M12 17h.01\\"/></g>"},"align-center":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 10H6\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M18 18H6\\"/></g>"},"align-justify":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 10H3\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M21 18H3\\"/></g>"},"align-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 10H3\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M17 18H3\\"/></g>"},"align-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 10H7\\"/><path d=\\"M21 6H3\\"/><path d=\\"M21 14H3\\"/><path d=\\"M21 18H7\\"/></g>"},"anchor":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"5\\" r=\\"3\\"/><path d=\\"M12 22V8\\"/><path d=\\"M5 12H2a10 10 0 0 0 20 0h-3\\"/></g>"},"aperture":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M14.31 8l5.74 9.94\\"/><path d=\\"M9.69 8h11.48\\"/><path d=\\"M7.38 12l5.74-9.94\\"/><path d=\\"M9.69 16L3.95 6.06\\"/><path d=\\"M14.31 16H2.83\\"/><path d=\\"M16.62 12l-5.74 9.94\\"/></g>"},"archive":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 8v13H3V8\\"/><path d=\\"M1 3h22v5H1z\\"/><path d=\\"M10 12h4\\"/></g>"},"arrow-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 5v14\\"/><path d=\\"M19 12l-7 7l-7-7\\"/></g>"},"arrow-down-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 12l4 4l4-4\\"/><path d=\\"M12 8v8\\"/></g>"},"arrow-down-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 7L7 17\\"/><path d=\\"M17 17H7V7\\"/></g>"},"arrow-down-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7 7l10 10\\"/><path d=\\"M17 7v10H7\\"/></g>"},"arrow-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 12H5\\"/><path d=\\"M12 19l-7-7l7-7\\"/></g>"},"arrow-left-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8l-4 4l4 4\\"/><path d=\\"M16 12H8\\"/></g>"},"arrow-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 12h14\\"/><path d=\\"M12 5l7 7l-7 7\\"/></g>"},"arrow-right-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 16l4-4l-4-4\\"/><path d=\\"M8 12h8\\"/></g>"},"arrow-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 19V5\\"/><path d=\\"M5 12l7-7l7 7\\"/></g>"},"arrow-up-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16 12l-4-4l-4 4\\"/><path d=\\"M12 16V8\\"/></g>"},"arrow-up-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 17L7 7\\"/><path d=\\"M7 17V7h10\\"/></g>"},"arrow-up-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7 17L17 7\\"/><path d=\\"M7 7h10v10\\"/></g>"},"at-sign":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94\\"/></g>"},"award":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"8\\" r=\\"7\\"/><path d=\\"M8.21 13.89L7 23l5-3l5 3l-1.21-9.12\\"/></g>"},"bar-chart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 20V10\\"/><path d=\\"M18 20V4\\"/><path d=\\"M6 20v-4\\"/></g>"},"bar-chart-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 20V10\\"/><path d=\\"M12 20V4\\"/><path d=\\"M6 20v-6\\"/></g>"},"battery":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"6\\" width=\\"18\\" height=\\"12\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M23 13v-2\\"/></g>"},"battery-charging":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19\\"/><path d=\\"M23 13v-2\\"/><path d=\\"M11 6l-4 6h6l-4 6\\"/></g>"},"bell":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9\\"/><path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\"/></g>"},"bell-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13.73 21a2 2 0 0 1-3.46 0\\"/><path d=\\"M18.63 13A17.89 17.89 0 0 1 18 8\\"/><path d=\\"M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14\\"/><path d=\\"M18 8a6 6 0 0 0-9.33-5\\"/><path d=\\"M1 1l22 22\\"/></g>"},"bluetooth":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6.5 6.5l11 11L12 23V1l5.5 5.5l-11 11\\"/></g>"},"bold":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 4h8a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6z\\"/><path d=\\"M6 12h9a4 4 0 0 1 4 4a4 4 0 0 1-4 4H6z\\"/></g>"},"book":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 19.5A2.5 2.5 0 0 1 6.5 17H20\\"/><path d=\\"M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z\\"/></g>"},"book-open":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z\\"/><path d=\\"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z\\"/></g>"},"bookmark":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 21l-7-5l-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z\\"/></g>"},"box":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05\\"/><path d=\\"M12 22.08V12\\"/></g>"},"briefcase":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"7\\" width=\\"20\\" height=\\"14\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16\\"/></g>"},"calendar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"4\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M16 2v4\\"/><path d=\\"M8 2v4\\"/><path d=\\"M3 10h18\\"/></g>"},"camera":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z\\"/><circle cx=\\"12\\" cy=\\"13\\" r=\\"4\\"/></g>"},"camera-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 1l22 22\\"/><path d=\\"M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56\\"/></g>"},"cast":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6\\"/><path d=\\"M2 20h.01\\"/></g>"},"check":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 6L9 17l-5-5\\"/></g>"},"check-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 11.08V12a10 10 0 1 1-5.93-9.14\\"/><path d=\\"M22 4L12 14.01l-3-3\\"/></g>"},"check-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 11l3 3L22 4\\"/><path d=\\"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11\\"/></g>"},"chevron-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 9l6 6l6-6\\"/></g>"},"chevron-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 18l-6-6l6-6\\"/></g>"},"chevron-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 18l6-6l-6-6\\"/></g>"},"chevron-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 15l-6-6l-6 6\\"/></g>"},"chevrons-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7 13l5 5l5-5\\"/><path d=\\"M7 6l5 5l5-5\\"/></g>"},"chevrons-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 17l-5-5l5-5\\"/><path d=\\"M18 17l-5-5l5-5\\"/></g>"},"chevrons-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 17l5-5l-5-5\\"/><path d=\\"M6 17l5-5l-5-5\\"/></g>"},"chevrons-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 11l-5-5l-5 5\\"/><path d=\\"M17 18l-5-5l-5 5\\"/></g>"},"chrome":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M21.17 8H12\\"/><path d=\\"M3.95 6.06L8.54 14\\"/><path d=\\"M10.88 21.94L15.46 14\\"/></g>"},"circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/></g>"},"clipboard":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\\"/><rect x=\\"8\\" y=\\"2\\" width=\\"8\\" height=\\"4\\" rx=\\"1\\" ry=\\"1\\"/></g>"},"clock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 6v6l4 2\\"/></g>"},"cloud-drizzle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 19v2\\"/><path d=\\"M8 13v2\\"/><path d=\\"M16 19v2\\"/><path d=\\"M16 13v2\\"/><path d=\\"M12 21v2\\"/><path d=\\"M12 15v2\\"/><path d=\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\"/></g>"},"cloud-lightning":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9\\"/><path d=\\"M13 11l-4 6h6l-4 6\\"/></g>"},"cloud-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3\\"/><path d=\\"M1 1l22 22\\"/></g>"},"cloud-rain":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 13v8\\"/><path d=\\"M8 13v8\\"/><path d=\\"M12 15v8\\"/><path d=\\"M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25\\"/></g>"},"cloud-snow":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25\\"/><path d=\\"M8 16h.01\\"/><path d=\\"M8 20h.01\\"/><path d=\\"M12 18h.01\\"/><path d=\\"M12 22h.01\\"/><path d=\\"M16 16h.01\\"/><path d=\\"M16 20h.01\\"/></g>"},"code":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 18l6-6l-6-6\\"/><path d=\\"M8 6l-6 6l6 6\\"/></g>"},"codepen":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2l10 6.5v7L12 22L2 15.5v-7L12 2z\\"/><path d=\\"M12 22v-6.5\\"/><path d=\\"M22 8.5l-10 7l-10-7\\"/><path d=\\"M2 15.5l10-7l10 7\\"/><path d=\\"M12 2v6.5\\"/></g>"},"codesandbox":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M7.5 4.21l4.5 2.6l4.5-2.6\\"/><path d=\\"M7.5 19.79V14.6L3 12\\"/><path d=\\"M21 12l-4.5 2.6v5.19\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05\\"/><path d=\\"M12 22.08V12\\"/></g>"},"coffee":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 8h1a4 4 0 0 1 0 8h-1\\"/><path d=\\"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z\\"/><path d=\\"M6 1v3\\"/><path d=\\"M10 1v3\\"/><path d=\\"M14 1v3\\"/></g>"},"columns":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18\\"/></g>"},"command":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3a3 3 0 0 0-3-3z\\"/></g>"},"compass":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16.24 7.76l-2.12 6.36l-6.36 2.12l2.12-6.36l6.36-2.12z\\"/></g>"},"copy":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"9\\" y=\\"9\\" width=\\"13\\" height=\\"13\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\\"/></g>"},"corner-down-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 10l-5 5l5 5\\"/><path d=\\"M20 4v7a4 4 0 0 1-4 4H4\\"/></g>"},"corner-down-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 10l5 5l-5 5\\"/><path d=\\"M4 4v7a4 4 0 0 0 4 4h12\\"/></g>"},"corner-left-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 15l-5 5l-5-5\\"/><path d=\\"M20 4h-7a4 4 0 0 0-4 4v12\\"/></g>"},"corner-left-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 9L9 4L4 9\\"/><path d=\\"M20 20h-7a4 4 0 0 1-4-4V4\\"/></g>"},"corner-right-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 15l5 5l5-5\\"/><path d=\\"M4 4h7a4 4 0 0 1 4 4v12\\"/></g>"},"corner-right-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 9l5-5l5 5\\"/><path d=\\"M4 20h7a4 4 0 0 0 4-4V4\\"/></g>"},"corner-up-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 14L4 9l5-5\\"/><path d=\\"M20 20v-7a4 4 0 0 0-4-4H4\\"/></g>"},"corner-up-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 14l5-5l-5-5\\"/><path d=\\"M4 20v-7a4 4 0 0 1 4-4h12\\"/></g>"},"cpu":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"4\\" y=\\"4\\" width=\\"16\\" height=\\"16\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 9h6v6H9z\\"/><path d=\\"M9 1v3\\"/><path d=\\"M15 1v3\\"/><path d=\\"M9 20v3\\"/><path d=\\"M15 20v3\\"/><path d=\\"M20 9h3\\"/><path d=\\"M20 14h3\\"/><path d=\\"M1 9h3\\"/><path d=\\"M1 14h3\\"/></g>"},"credit-card":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"4\\" width=\\"22\\" height=\\"16\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M1 10h22\\"/></g>"},"crop":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6.13 1L6 16a2 2 0 0 0 2 2h15\\"/><path d=\\"M1 6.13L16 6a2 2 0 0 1 2 2v15\\"/></g>"},"crosshair":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M22 12h-4\\"/><path d=\\"M6 12H2\\"/><path d=\\"M12 6V2\\"/><path d=\\"M12 22v-4\\"/></g>"},"database":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><ellipse cx=\\"12\\" cy=\\"5\\" rx=\\"9\\" ry=\\"3\\"/><path d=\\"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3\\"/><path d=\\"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5\\"/></g>"},"delete":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 4H8l-7 8l7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\\"/><path d=\\"M18 9l-6 6\\"/><path d=\\"M12 9l6 6\\"/></g>"},"disc":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"dollar-sign":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 1v22\\"/><path d=\\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\\"/></g>"},"download":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\"/><path d=\\"M7 10l5 5l5-5\\"/><path d=\\"M12 15V3\\"/></g>"},"download-cloud":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 17l4 4l4-4\\"/><path d=\\"M12 12v9\\"/><path d=\\"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29\\"/></g>"},"droplet":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z\\"/></g>"},"edit":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\\"/><path d=\\"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1l1-4l9.5-9.5z\\"/></g>"},"edit-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5L2 22l1.5-5.5L17 3z\\"/></g>"},"edit-3":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 20h9\\"/><path d=\\"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1l1-4L16.5 3.5z\\"/></g>"},"external-link":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\\"/><path d=\\"M15 3h6v6\\"/><path d=\\"M10 14L21 3\\"/></g>"},"eye":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8z\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/></g>"},"eye-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24\\"/><path d=\\"M1 1l22 22\\"/></g>"},"facebook":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\\"/></g>"},"fast-forward":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 19l9-7l-9-7v14z\\"/><path d=\\"M2 19l9-7l-9-7v14z\\"/></g>"},"feather":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\\"/><path d=\\"M16 8L2 22\\"/><path d=\\"M17.5 15H9\\"/></g>"},"figma":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z\\"/><path d=\\"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z\\"/><path d=\\"M12 12.5a3.5 3.5 0 1 1 7 0a3.5 3.5 0 1 1-7 0z\\"/><path d=\\"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z\\"/><path d=\\"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z\\"/></g>"},"file":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z\\"/><path d=\\"M13 2v7h7\\"/></g>"},"file-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6\\"/><path d=\\"M9 15h6\\"/></g>"},"file-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6\\"/><path d=\\"M12 18v-6\\"/><path d=\\"M9 15h6\\"/></g>"},"file-text":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\\"/><path d=\\"M14 2v6h6\\"/><path d=\\"M16 13H8\\"/><path d=\\"M16 17H8\\"/><path d=\\"M10 9H8\\"/></g>"},"film":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"2\\" width=\\"20\\" height=\\"20\\" rx=\\"2.18\\" ry=\\"2.18\\"/><path d=\\"M7 2v20\\"/><path d=\\"M17 2v20\\"/><path d=\\"M2 12h20\\"/><path d=\\"M2 7h5\\"/><path d=\\"M2 17h5\\"/><path d=\\"M17 17h5\\"/><path d=\\"M17 7h5\\"/></g>"},"filter":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 3H2l8 9.46V19l4 2v-8.54L22 3z\\"/></g>"},"flag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 15s1-1 4-1s5 2 8 2s4-1 4-1V3s-1 1-4 1s-5-2-8-2s-4 1-4 1z\\"/><path d=\\"M4 22v-7\\"/></g>"},"folder":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/></g>"},"folder-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/><path d=\\"M9 14h6\\"/></g>"},"folder-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z\\"/><path d=\\"M12 11v6\\"/><path d=\\"M9 14h6\\"/></g>"},"framer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7\\"/></g>"},"frown":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M16 16s-1.5-2-4-2s-4 2-4 2\\"/><path d=\\"M9 9h.01\\"/><path d=\\"M15 9h.01\\"/></g>"},"gift":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 12v10H4V12\\"/><path d=\\"M2 7h20v5H2z\\"/><path d=\\"M12 22V7\\"/><path d=\\"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z\\"/><path d=\\"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z\\"/></g>"},"git-branch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 3v12\\"/><circle cx=\\"18\\" cy=\\"6\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><path d=\\"M18 9a9 9 0 0 1-9 9\\"/></g>"},"git-commit":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M1.05 12H7\\"/><path d=\\"M17.01 12h5.95\\"/></g>"},"git-merge":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"18\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><path d=\\"M6 21V9a9 9 0 0 0 9 9\\"/></g>"},"git-pull-request":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"18\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><path d=\\"M13 6h3a2 2 0 0 1 2 2v7\\"/><path d=\\"M6 9v12\\"/></g>"},"github":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22\\"/></g>"},"gitlab":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22.65 14.39L12 22.13L1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78l2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0a.42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0a.42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z\\"/></g>"},"globe":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M2 12h20\\"/><path d=\\"M12 2a15.3 15.3 0 0 1 4 10a15.3 15.3 0 0 1-4 10a15.3 15.3 0 0 1-4-10a15.3 15.3 0 0 1 4-10z\\"/></g>"},"grid":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 3h7v7H3z\\"/><path d=\\"M14 3h7v7h-7z\\"/><path d=\\"M14 14h7v7h-7z\\"/><path d=\\"M3 14h7v7H3z\\"/></g>"},"hard-drive":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12H2\\"/><path d=\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\"/><path d=\\"M6 16h.01\\"/><path d=\\"M10 16h.01\\"/></g>"},"hash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 9h16\\"/><path d=\\"M4 15h16\\"/><path d=\\"M10 3L8 21\\"/><path d=\\"M16 3l-2 18\\"/></g>"},"headphones":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 18v-6a9 9 0 0 1 18 0v6\\"/><path d=\\"M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z\\"/></g>"},"heart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78l1.06-1.06a5.5 5.5 0 0 0 0-7.78z\\"/></g>"},"help-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\\"/><path d=\\"M12 17h.01\\"/></g>"},"hexagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/></g>"},"home":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 9l9-7l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\\"/><path d=\\"M9 22V12h6v10\\"/></g>"},"image":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><circle cx=\\"8.5\\" cy=\\"8.5\\" r=\\"1.5\\"/><path d=\\"M21 15l-5-5L5 21\\"/></g>"},"inbox":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 12h-6l-2 3h-4l-2-3H2\\"/><path d=\\"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z\\"/></g>"},"info":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 16v-4\\"/><path d=\\"M12 8h.01\\"/></g>"},"instagram":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"2\\" width=\\"20\\" height=\\"20\\" rx=\\"5\\" ry=\\"5\\"/><path d=\\"M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37z\\"/><path d=\\"M17.5 6.5h.01\\"/></g>"},"italic":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 4h-9\\"/><path d=\\"M14 20H5\\"/><path d=\\"M15 4L9 20\\"/></g>"},"key":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778a5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4\\"/></g>"},"layers":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2L2 7l10 5l10-5l-10-5z\\"/><path d=\\"M2 17l10 5l10-5\\"/><path d=\\"M2 12l10 5l10-5\\"/></g>"},"layout":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M3 9h18\\"/><path d=\\"M9 21V9\\"/></g>"},"life-buoy":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"4\\"/><path d=\\"M4.93 4.93l4.24 4.24\\"/><path d=\\"M14.83 14.83l4.24 4.24\\"/><path d=\\"M14.83 9.17l4.24-4.24\\"/><path d=\\"M14.83 9.17l3.53-3.53\\"/><path d=\\"M4.93 19.07l4.24-4.24\\"/></g>"},"link":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\\"/><path d=\\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\\"/></g>"},"link-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 7h3a5 5 0 0 1 5 5a5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5a5 5 0 0 1 5-5h3\\"/><path d=\\"M8 12h8\\"/></g>"},"linkedin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z\\"/><path d=\\"M2 9h4v12H2z\\"/><circle cx=\\"4\\" cy=\\"4\\" r=\\"2\\"/></g>"},"list":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 6h13\\"/><path d=\\"M8 12h13\\"/><path d=\\"M8 18h13\\"/><path d=\\"M3 6h.01\\"/><path d=\\"M3 12h.01\\"/><path d=\\"M3 18h.01\\"/></g>"},"loader":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2v4\\"/><path d=\\"M12 18v4\\"/><path d=\\"M4.93 4.93l2.83 2.83\\"/><path d=\\"M16.24 16.24l2.83 2.83\\"/><path d=\\"M2 12h4\\"/><path d=\\"M18 12h4\\"/><path d=\\"M4.93 19.07l2.83-2.83\\"/><path d=\\"M16.24 7.76l2.83-2.83\\"/></g>"},"lock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"11\\" width=\\"18\\" height=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 10 0v4\\"/></g>"},"log-in":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4\\"/><path d=\\"M10 17l5-5l-5-5\\"/><path d=\\"M15 12H3\\"/></g>"},"log-out":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\\"/><path d=\\"M16 17l5-5l-5-5\\"/><path d=\\"M21 12H9\\"/></g>"},"mail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z\\"/><path d=\\"M22 6l-10 7L2 6\\"/></g>"},"map":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 6v16l7-4l8 4l7-4V2l-7 4l-8-4l-7 4z\\"/><path d=\\"M8 2v16\\"/><path d=\\"M16 6v16\\"/></g>"},"map-pin":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z\\"/><circle cx=\\"12\\" cy=\\"10\\" r=\\"3\\"/></g>"},"maximize":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3\\"/></g>"},"maximize-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15 3h6v6\\"/><path d=\\"M9 21H3v-6\\"/><path d=\\"M21 3l-7 7\\"/><path d=\\"M3 21l7-7\\"/></g>"},"meh":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 15h8\\"/><path d=\\"M9 9h.01\\"/><path d=\\"M15 9h.01\\"/></g>"},"menu":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 12h18\\"/><path d=\\"M3 6h18\\"/><path d=\\"M3 18h18\\"/></g>"},"message-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 11.5a8.38 8.38 0 0 1-.9 3.8a8.5 8.5 0 0 1-7.6 4.7a8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8a8.5 8.5 0 0 1 4.7-7.6a8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\\"/></g>"},"message-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\\"/></g>"},"mic":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z\\"/><path d=\\"M19 10v2a7 7 0 0 1-14 0v-2\\"/><path d=\\"M12 19v4\\"/><path d=\\"M8 23h8\\"/></g>"},"mic-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 1l22 22\\"/><path d=\\"M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6\\"/><path d=\\"M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23\\"/><path d=\\"M12 19v4\\"/><path d=\\"M8 23h8\\"/></g>"},"minimize":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3\\"/></g>"},"minimize-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 14h6v6\\"/><path d=\\"M20 10h-6V4\\"/><path d=\\"M14 10l7-7\\"/><path d=\\"M3 21l7-7\\"/></g>"},"minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 12h14\\"/></g>"},"minus-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 12h8\\"/></g>"},"minus-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M8 12h8\\"/></g>"},"monitor":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"3\\" width=\\"20\\" height=\\"14\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M8 21h8\\"/><path d=\\"M12 17v4\\"/></g>"},"moon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 12.79A9 9 0 1 1 11.21 3A7 7 0 0 0 21 12.79z\\"/></g>"},"more-horizontal":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"19\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"5\\" cy=\\"12\\" r=\\"1\\"/></g>"},"more-vertical":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"5\\" r=\\"1\\"/><circle cx=\\"12\\" cy=\\"19\\" r=\\"1\\"/></g>"},"mouse-pointer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 3l7.07 16.97l2.51-7.39l7.39-2.51L3 3z\\"/><path d=\\"M13 13l6 6\\"/></g>"},"move":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 9l-3 3l3 3\\"/><path d=\\"M9 5l3-3l3 3\\"/><path d=\\"M15 19l-3 3l-3-3\\"/><path d=\\"M19 9l3 3l-3 3\\"/><path d=\\"M2 12h20\\"/><path d=\\"M12 2v20\\"/></g>"},"music":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9 18V5l12-2v13\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><circle cx=\\"18\\" cy=\\"16\\" r=\\"3\\"/></g>"},"navigation":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 11l19-9l-9 19l-2-8l-8-2z\\"/></g>"},"navigation-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2l7 19l-7-4l-7 4l7-19z\\"/></g>"},"octagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/></g>"},"package":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16.5 9.4l-9-5.19\\"/><path d=\\"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z\\"/><path d=\\"M3.27 6.96L12 12.01l8.73-5.05\\"/><path d=\\"M12 22.08V12\\"/></g>"},"paperclip":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48\\"/></g>"},"pause":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 4h4v16H6z\\"/><path d=\\"M14 4h4v16h-4z\\"/></g>"},"pause-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M10 15V9\\"/><path d=\\"M14 15V9\\"/></g>"},"pen-tool":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 19l7-7l3 3l-7 7l-3-3z\\"/><path d=\\"M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z\\"/><path d=\\"M2 2l7.586 7.586\\"/><circle cx=\\"11\\" cy=\\"11\\" r=\\"2\\"/></g>"},"percent":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 5L5 19\\"/><circle cx=\\"6.5\\" cy=\\"6.5\\" r=\\"2.5\\"/><circle cx=\\"17.5\\" cy=\\"17.5\\" r=\\"2.5\\"/></g>"},"phone":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-call":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-forwarded":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 1l4 4l-4 4\\"/><path d=\\"M15 5h8\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-incoming":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 2v6h6\\"/><path d=\\"M23 1l-7 7\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-missed":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 1l-6 6\\"/><path d=\\"M17 1l6 6\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"phone-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7a2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91\\"/><path d=\\"M23 1L1 23\\"/></g>"},"phone-outgoing":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 7V1h-6\\"/><path d=\\"M16 8l7-7\\"/><path d=\\"M22 16.92v3a2 2 0 0 1-2.18 2a19.79 19.79 0 0 1-8.63-3.07a19.5 19.5 0 0 1-6-6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72a12.84 12.84 0 0 0 .7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45a12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\\"/></g>"},"pie-chart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21.21 15.89A10 10 0 1 1 8 2.83\\"/><path d=\\"M22 12A10 10 0 0 0 12 2v10z\\"/></g>"},"play":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 3l14 9l-14 9V3z\\"/></g>"},"play-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M10 8l6 4l-6 4V8z\\"/></g>"},"plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 5v14\\"/><path d=\\"M5 12h14\\"/></g>"},"plus-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M12 8v8\\"/><path d=\\"M8 12h8\\"/></g>"},"pocket":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z\\"/><path d=\\"M8 10l4 4l4-4\\"/></g>"},"power":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18.36 6.64a9 9 0 1 1-12.73 0\\"/><path d=\\"M12 2v10\\"/></g>"},"printer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 9V2h12v7\\"/><path d=\\"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2\\"/><path d=\\"M6 14h12v8H6z\\"/></g>"},"radio":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"2\\"/><path d=\\"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14\\"/></g>"},"refresh-ccw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 4v6h6\\"/><path d=\\"M23 20v-6h-6\\"/><path d=\\"M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15\\"/></g>"},"refresh-cw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 4v6h-6\\"/><path d=\\"M1 20v-6h6\\"/><path d=\\"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15\\"/></g>"},"repeat":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 1l4 4l-4 4\\"/><path d=\\"M3 11V9a4 4 0 0 1 4-4h14\\"/><path d=\\"M7 23l-4-4l4-4\\"/><path d=\\"M21 13v2a4 4 0 0 1-4 4H3\\"/></g>"},"rewind":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 19l-9-7l9-7v14z\\"/><path d=\\"M22 19l-9-7l9-7v14z\\"/></g>"},"rotate-ccw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 4v6h6\\"/><path d=\\"M3.51 15a9 9 0 1 0 2.13-9.36L1 10\\"/></g>"},"rotate-cw":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 4v6h-6\\"/><path d=\\"M20.49 15a9 9 0 1 1-2.12-9.36L23 10\\"/></g>"},"rss":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 11a9 9 0 0 1 9 9\\"/><path d=\\"M4 4a16 16 0 0 1 16 16\\"/><circle cx=\\"5\\" cy=\\"19\\" r=\\"1\\"/></g>"},"save":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z\\"/><path d=\\"M17 21v-8H7v8\\"/><path d=\\"M7 3v5h8\\"/></g>"},"scissors":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"6\\" cy=\\"6\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"18\\" r=\\"3\\"/><path d=\\"M20 4L8.12 15.88\\"/><path d=\\"M14.47 14.48L20 20\\"/><path d=\\"M8.12 8.12L12 12\\"/></g>"},"search":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/></g>"},"send":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22 2L11 13\\"/><path d=\\"M22 2l-7 20l-4-9l-9-4l20-7z\\"/></g>"},"server":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"2\\" width=\\"20\\" height=\\"8\\" rx=\\"2\\" ry=\\"2\\"/><rect x=\\"2\\" y=\\"14\\" width=\\"20\\" height=\\"8\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M6 6h.01\\"/><path d=\\"M6 18h.01\\"/></g>"},"settings":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"3\\"/><path d=\\"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83a2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33a1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0a2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2a2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83a2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2a2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0a2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z\\"/></g>"},"share":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8\\"/><path d=\\"M16 6l-4-4l-4 4\\"/><path d=\\"M12 2v13\\"/></g>"},"share-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"18\\" cy=\\"5\\" r=\\"3\\"/><circle cx=\\"6\\" cy=\\"12\\" r=\\"3\\"/><circle cx=\\"18\\" cy=\\"19\\" r=\\"3\\"/><path d=\\"M8.59 13.51l6.83 3.98\\"/><path d=\\"M15.41 6.51l-6.82 3.98\\"/></g>"},"shield":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10z\\"/></g>"},"shield-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3l-3.16 1.18\\"/><path d=\\"M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38\\"/><path d=\\"M1 1l22 22\\"/></g>"},"shopping-bag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\\"/><path d=\\"M3 6h18\\"/><path d=\\"M16 10a4 4 0 0 1-8 0\\"/></g>"},"shopping-cart":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"9\\" cy=\\"21\\" r=\\"1\\"/><circle cx=\\"20\\" cy=\\"21\\" r=\\"1\\"/><path d=\\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\\"/></g>"},"shuffle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 3h5v5\\"/><path d=\\"M4 20L21 3\\"/><path d=\\"M21 16v5h-5\\"/><path d=\\"M15 15l6 6\\"/><path d=\\"M4 4l5 5\\"/></g>"},"sidebar":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 3v18\\"/></g>"},"skip-back":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M19 20L9 12l10-8v16z\\"/><path d=\\"M5 19V5\\"/></g>"},"skip-forward":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 4l10 8l-10 8V4z\\"/><path d=\\"M19 5v14\\"/></g>"},"slack":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z\\"/><path d=\\"M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z\\"/><path d=\\"M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z\\"/><path d=\\"M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5S2.67 14 3.5 14z\\"/><path d=\\"M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z\\"/><path d=\\"M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z\\"/><path d=\\"M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z\\"/><path d=\\"M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5S7.67 5 8.5 5z\\"/></g>"},"slash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M4.93 4.93l14.14 14.14\\"/></g>"},"sliders":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 21v-7\\"/><path d=\\"M4 10V3\\"/><path d=\\"M12 21v-9\\"/><path d=\\"M12 8V3\\"/><path d=\\"M20 21v-5\\"/><path d=\\"M20 12V3\\"/><path d=\\"M1 14h6\\"/><path d=\\"M9 8h6\\"/><path d=\\"M17 16h6\\"/></g>"},"smartphone":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"5\\" y=\\"2\\" width=\\"14\\" height=\\"20\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M12 18h.01\\"/></g>"},"smile":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M8 14s1.5 2 4 2s4-2 4-2\\"/><path d=\\"M9 9h.01\\"/><path d=\\"M15 9h.01\\"/></g>"},"speaker":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"4\\" y=\\"2\\" width=\\"16\\" height=\\"20\\" rx=\\"2\\" ry=\\"2\\"/><circle cx=\\"12\\" cy=\\"14\\" r=\\"4\\"/><path d=\\"M12 6h.01\\"/></g>"},"square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/></g>"},"star":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01L12 2z\\"/></g>"},"stop-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M9 9h6v6H9z\\"/></g>"},"sun":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"5\\"/><path d=\\"M12 1v2\\"/><path d=\\"M12 21v2\\"/><path d=\\"M4.22 4.22l1.42 1.42\\"/><path d=\\"M18.36 18.36l1.42 1.42\\"/><path d=\\"M1 12h2\\"/><path d=\\"M21 12h2\\"/><path d=\\"M4.22 19.78l1.42-1.42\\"/><path d=\\"M18.36 5.64l1.42-1.42\\"/></g>"},"sunrise":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 18a5 5 0 0 0-10 0\\"/><path d=\\"M12 2v7\\"/><path d=\\"M4.22 10.22l1.42 1.42\\"/><path d=\\"M1 18h2\\"/><path d=\\"M21 18h2\\"/><path d=\\"M18.36 11.64l1.42-1.42\\"/><path d=\\"M23 22H1\\"/><path d=\\"M8 6l4-4l4 4\\"/></g>"},"sunset":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 18a5 5 0 0 0-10 0\\"/><path d=\\"M12 9V2\\"/><path d=\\"M4.22 10.22l1.42 1.42\\"/><path d=\\"M1 18h2\\"/><path d=\\"M21 18h2\\"/><path d=\\"M18.36 11.64l1.42-1.42\\"/><path d=\\"M23 22H1\\"/><path d=\\"M16 5l-4 4l-4-4\\"/></g>"},"tablet":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"4\\" y=\\"2\\" width=\\"16\\" height=\\"20\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M12 18h.01\\"/></g>"},"tag":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\\"/><path d=\\"M7 7h.01\\"/></g>"},"target":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"6\\"/><circle cx=\\"12\\" cy=\\"12\\" r=\\"2\\"/></g>"},"terminal":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 17l6-6l-6-6\\"/><path d=\\"M12 19h8\\"/></g>"},"thermometer":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z\\"/></g>"},"thumbs-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17\\"/></g>"},"thumbs-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\\"/></g>"},"toggle-left":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"5\\" width=\\"22\\" height=\\"14\\" rx=\\"7\\" ry=\\"7\\"/><circle cx=\\"8\\" cy=\\"12\\" r=\\"3\\"/></g>"},"toggle-right":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"1\\" y=\\"5\\" width=\\"22\\" height=\\"14\\" rx=\\"7\\" ry=\\"7\\"/><circle cx=\\"16\\" cy=\\"12\\" r=\\"3\\"/></g>"},"tool":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\\"/></g>"},"trash":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 6h18\\"/><path d=\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\"/></g>"},"trash-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M3 6h18\\"/><path d=\\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\\"/><path d=\\"M10 11v6\\"/><path d=\\"M14 11v6\\"/></g>"},"trello":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 7h3v9H7z\\"/><path d=\\"M14 7h3v5h-3z\\"/></g>"},"trending-down":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 18l-9.5-9.5l-5 5L1 6\\"/><path d=\\"M17 18h6v-6\\"/></g>"},"trending-up":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 6l-9.5 9.5l-5-5L1 18\\"/><path d=\\"M17 6h6v6\\"/></g>"},"triangle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\\"/></g>"},"truck":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 3h15v13H1z\\"/><path d=\\"M16 8h4l3 3v5h-7V8z\\"/><circle cx=\\"5.5\\" cy=\\"18.5\\" r=\\"2.5\\"/><circle cx=\\"18.5\\" cy=\\"18.5\\" r=\\"2.5\\"/></g>"},"tv":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"2\\" y=\\"7\\" width=\\"20\\" height=\\"15\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M17 2l-5 5l-5-5\\"/></g>"},"twitch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7\\"/></g>"},"twitter":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z\\"/></g>"},"type":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M4 7V4h16v3\\"/><path d=\\"M9 20h6\\"/><path d=\\"M12 4v16\\"/></g>"},"umbrella":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7\\"/></g>"},"underline":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M6 3v7a6 6 0 0 0 6 6a6 6 0 0 0 6-6V3\\"/><path d=\\"M4 21h16\\"/></g>"},"unlock":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"11\\" width=\\"18\\" height=\\"11\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M7 11V7a5 5 0 0 1 9.9-1\\"/></g>"},"upload":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\\"/><path d=\\"M17 8l-5-5l-5 5\\"/><path d=\\"M12 3v12\\"/></g>"},"upload-cloud":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 16l-4-4l-4 4\\"/><path d=\\"M12 12v9\\"/><path d=\\"M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3\\"/><path d=\\"M16 16l-4-4l-4 4\\"/></g>"},"user":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\\"/><circle cx=\\"12\\" cy=\\"7\\" r=\\"4\\"/></g>"},"user-check":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M17 11l2 2l4-4\\"/></g>"},"user-minus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 11h-6\\"/></g>"},"user-plus":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M20 8v6\\"/><path d=\\"M23 11h-6\\"/></g>"},"user-x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"8.5\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M18 8l5 5\\"/><path d=\\"M23 8l-5 5\\"/></g>"},"users":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\\"/><circle cx=\\"9\\" cy=\\"7\\" r=\\"4\\"/><path d=\\"M23 21v-2a4 4 0 0 0-3-3.87\\"/><path d=\\"M16 3.13a4 4 0 0 1 0 7.75\\"/></g>"},"video":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M23 7l-7 5l7 5V7z\\"/><rect x=\\"1\\" y=\\"5\\" width=\\"15\\" height=\\"14\\" rx=\\"2\\" ry=\\"2\\"/></g>"},"video-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10\\"/><path d=\\"M1 1l22 22\\"/></g>"},"voicemail":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"5.5\\" cy=\\"11.5\\" r=\\"4.5\\"/><circle cx=\\"18.5\\" cy=\\"11.5\\" r=\\"4.5\\"/><path d=\\"M5.5 16h13\\"/></g>"},"volume":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/></g>"},"volume-1":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/><path d=\\"M15.54 8.46a5 5 0 0 1 0 7.07\\"/></g>"},"volume-2":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/><path d=\\"M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07\\"/></g>"},"volume-x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M11 5L6 9H2v6h4l5 4V5z\\"/><path d=\\"M23 9l-6 6\\"/><path d=\\"M17 9l6 6\\"/></g>"},"watch":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"7\\"/><path d=\\"M12 9v3l1.5 1.5\\"/><path d=\\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\\"/></g>"},"wifi":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M5 12.55a11 11 0 0 1 14.08 0\\"/><path d=\\"M1.42 9a16 16 0 0 1 21.16 0\\"/><path d=\\"M8.53 16.11a6 6 0 0 1 6.95 0\\"/><path d=\\"M12 20h.01\\"/></g>"},"wifi-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M1 1l22 22\\"/><path d=\\"M16.72 11.06A10.94 10.94 0 0 1 19 12.55\\"/><path d=\\"M5 12.55a10.94 10.94 0 0 1 5.17-2.39\\"/><path d=\\"M10.71 5.05A16 16 0 0 1 22.58 9\\"/><path d=\\"M1.42 9a15.91 15.91 0 0 1 4.7-2.88\\"/><path d=\\"M8.53 16.11a6 6 0 0 1 6.95 0\\"/><path d=\\"M12 20h.01\\"/></g>"},"wind":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2\\"/></g>"},"x":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M18 6L6 18\\"/><path d=\\"M6 6l12 12\\"/></g>"},"x-circle":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"12\\" cy=\\"12\\" r=\\"10\\"/><path d=\\"M15 9l-6 6\\"/><path d=\\"M9 9l6 6\\"/></g>"},"x-octagon":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2z\\"/><path d=\\"M15 9l-6 6\\"/><path d=\\"M9 9l6 6\\"/></g>"},"x-square":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><rect x=\\"3\\" y=\\"3\\" width=\\"18\\" height=\\"18\\" rx=\\"2\\" ry=\\"2\\"/><path d=\\"M9 9l6 6\\"/><path d=\\"M15 9l-6 6\\"/></g>"},"youtube":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2a29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z\\"/><path d=\\"M9.75 15.02l5.75-3.27l-5.75-3.27v6.54z\\"/></g>"},"zap":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M13 2L3 14h9l-1 8l10-12h-9l1-8z\\"/></g>"},"zap-off":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><path d=\\"M12.41 6.75L13 2l-2.43 2.92\\"/><path d=\\"M18.57 12.91L21 10h-5.34\\"/><path d=\\"M8 8l-5 6h9l-1 8l5-6\\"/><path d=\\"M1 1l22 22\\"/></g>"},"zoom-in":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/><path d=\\"M11 8v6\\"/><path d=\\"M8 11h6\\"/></g>"},"zoom-out":{"body":"<g fill=\\"none\\" stroke=\\"currentColor\\" stroke-width=\\"2\\" stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\"><circle cx=\\"11\\" cy=\\"11\\" r=\\"8\\"/><path d=\\"M21 21l-4.35-4.35\\"/><path d=\\"M8 11h6\\"/></g>"}}},{"prefix":"ic","width":24,"height":24,"icons":{"outline-report":{"body":"<path d=\\"M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5h5.8L19 9.1v5.8z\\" fill=\\"currentColor\\"/><circle cx=\\"12\\" cy=\\"16\\" r=\\"1\\" fill=\\"currentColor\\"/><path d=\\"M11 7h2v7h-2z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"mdi","width":24,"height":24,"icons":{"cog":{"body":"<path d=\\"M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66z\\" fill=\\"currentColor\\"/>"}}},{"prefix":"fa","width":1536,"height":1536,"icons":{"angle-down":{"body":"<path d=\\"M1011 480q0 13-10 23L535 969q-10 10-23 10t-23-10L23 503q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393l393-393q10-10 23-10t23 10l50 50q10 10 10 23z\\" fill=\\"currentColor\\"/>","width":1024,"height":1280,"inlineTop":-256},"angle-up":{"body":"<path d=\\"M1011 928q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 608l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z\\" fill=\\"currentColor\\"/>","width":1024,"height":1280,"inlineTop":-256},"sort":{"body":"<path d=\\"M1024 896q0 26-19 45l-448 448q-19 19-45 19t-45-19L19 941Q0 922 0 896t19-45t45-19h896q26 0 45 19t19 45zm0-384q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45z\\" fill=\\"currentColor\\"/>","width":1024,"height":1408,"inlineTop":-192},"sort-asc":{"body":"<path d=\\"M1024 512q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45z\\" fill=\\"currentColor\\"/>","width":1024,"height":1344,"inlineTop":-192}}},{"prefix":"et","width":32,"height":32,"icons":{}},{"prefix":"el","width":1200,"height":1200,"icons":{}},{"prefix":"fluent","width":24,"height":24,"icons":{"chevron-up-down-20-filled":{"body":"<g fill=\\"none\\"><path d=\\"M15.103 7.304a.75.75 0 0 1-1.133.976L10 4.31L6.03 8.28l-.084.073A.75.75 0 0 1 4.97 7.22l4.5-4.5l.084-.073a.75.75 0 0 1 .976.073l4.5 4.5l.073.084zM4.897 12.696a.75.75 0 0 1 1.133-.976L10 15.69l3.97-3.97l.084-.073a.75.75 0 0 1 .976 1.133l-4.5 4.5l-.084.073a.75.75 0 0 1-.976-.073l-4.5-4.5l-.073-.084z\\" fill=\\"currentColor\\"/></g>","width":20,"height":20}}},{"prefix":"fa-solid","width":512,"height":512,"icons":{"biking":{"body":"<path d=\\"M400 96a48 48 0 1 0-48-48a48 48 0 0 0 48 48zm-4 121a31.9 31.9 0 0 0 20 7h64a32 32 0 0 0 0-64h-52.78L356 103a31.94 31.94 0 0 0-40.81.68l-112 96a32 32 0 0 0 3.08 50.92L288 305.12V416a32 32 0 0 0 64 0V288a32 32 0 0 0-14.25-26.62l-41.36-27.57l58.25-49.92zm116 39a128 128 0 1 0 128 128a128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64zM128 256a128 128 0 1 0 128 128a128 128 0 0 0-128-128zm0 192a64 64 0 1 1 64-64a64 64 0 0 1-64 64z\\" fill=\\"currentColor\\"/>","width":640},"dumbbell":{"body":"<path d=\\"M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z\\" fill=\\"currentColor\\"/>","width":640},"running":{"body":"<path d=\\"M272 96c26.51 0 48-21.49 48-48S298.51 0 272 0s-48 21.49-48 48s21.49 48 48 48zM113.69 317.47l-14.8 34.52H32c-17.67 0-32 14.33-32 32s14.33 32 32 32h77.45c19.25 0 36.58-11.44 44.11-29.09l8.79-20.52l-10.67-6.3c-17.32-10.23-30.06-25.37-37.99-42.61zM384 223.99h-44.03l-26.06-53.25c-12.5-25.55-35.45-44.23-61.78-50.94l-71.08-21.14c-28.3-6.8-57.77-.55-80.84 17.14l-39.67 30.41c-14.03 10.75-16.69 30.83-5.92 44.86s30.84 16.66 44.86 5.92l39.69-30.41c7.67-5.89 17.44-8 25.27-6.14l14.7 4.37l-37.46 87.39c-12.62 29.48-1.31 64.01 26.3 80.31l84.98 50.17l-27.47 87.73c-5.28 16.86 4.11 34.81 20.97 40.09c3.19 1 6.41 1.48 9.58 1.48c13.61 0 26.23-8.77 30.52-22.45l31.64-101.06c5.91-20.77-2.89-43.08-21.64-54.39l-61.24-36.14l31.31-78.28l20.27 41.43c8 16.34 24.92 26.89 43.11 26.89H384c17.67 0 32-14.33 32-32s-14.33-31.99-32-31.99z\\" fill=\\"currentColor\\"/>","width":416},"skiing":{"body":"<path d=\\"M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48s21.5 48 48 48zm73 356.1c-9.4-9.4-24.6-9.4-33.9 0c-12.1 12.1-30.5 15.4-45.1 8.7l-135.8-70.2l49.2-73.8c12.7-19 10.2-44.5-6-60.6L293 215.7l-107-53.1c-2.9 19.9 3.4 40 17.7 54.4l75.1 75.2l-45.9 68.8L35 258.7c-11.7-6-26.2-1.5-32.3 10.3c-6.1 11.8-1.5 26.3 10.3 32.3l391.9 202.5c11.9 5.5 24.5 8.1 37.1 8.1c23.2 0 46-9 63-26c9.3-9.3 9.3-24.5 0-33.8zM120 91.6l-11.5 22.5c14.4 7.3 31.2 4.9 42.8-4.8l47.2 23.4c-.1.1-.1.2-.2.3l114.5 56.8l32.4-13l6.4 19.1c4 12.1 12.6 22 24 27.7l58.1 29c15.9 7.9 35 1.5 42.9-14.3c7.9-15.8 1.5-35-14.3-42.9l-52.1-26.1l-17.1-51.2c-8.1-24.2-40.9-56.6-84.5-39.2l-81.2 32.5l-62.5-31c.3-14.5-7.2-28.6-20.9-35.6l-11.1 21.7h-.2l-34.4-7c-1.8-.4-3.7.2-5 1.7c-1.9 2.2-1.7 5.5.5 7.4l26.2 23z\\" fill=\\"currentColor\\"/>"},"swimmer":{"body":"<path d=\\"M189.61 310.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c16.02-14.77 34.5-22.58 53.46-22.58h16.3c18.96 0 37.45 7.81 53.46 22.58c3.54 3.26 15.27 9.42 34.39 9.42s30.86-6.16 34.39-9.42c14.86-13.71 31.88-21.12 49.39-22.16l-112.84-80.6l18-12.86c3.64-2.58 8.28-3.52 12.62-2.61l100.35 21.53c25.91 5.53 51.44-10.97 57-36.88c5.55-25.92-10.95-51.44-36.88-57L437.68 98.47c-30.73-6.58-63.02.12-88.56 18.38l-80.02 57.17c-10.38 7.39-19.36 16.44-26.72 26.94L173.75 299c5.47 3.23 10.82 6.93 15.86 11.58zM624 352h-16c-26.04 0-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C461.8 343.58 442.04 352 416 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C269.8 343.58 250.04 352 224 352s-45.8-8.42-56.09-17.9c-8.9-8.21-19.66-14.1-31.77-14.1h-16.3c-12.11 0-22.87 5.89-31.77 14.1C77.8 343.58 58.04 352 32 352H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h16c38.62 0 72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84s72.72-12.19 96-31.84c23.28 19.66 57.38 31.84 96 31.84h16c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-512-96c44.18 0 80-35.82 80-80s-35.82-80-80-80s-80 35.82-80 80s35.82 80 80 80z\\" fill=\\"currentColor\\"/>","width":640}}},{"prefix":"fa-brands","width":448,"height":512,"icons":{"amazon":{"body":"<path d=\\"M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5c0 109.5 138.3 114 183.5 43.2c6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32C140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5c40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2c0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31c-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2c-10.8 1-13 2-14-.3c-2.3-5.7 21.7-15.5 37.5-17.5c15.7-1.8 41-.8 46 5.7c3.7 5.1 0 27.1-6.5 43.1z\\" fill=\\"currentColor\\"/>"},"dribbble":{"body":"<path d=\\"M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248s248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955c-6.984-1.477-77.018-15.682-147.502-6.818c-5.752-14.041-11.181-26.393-18.617-41.614c78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519c-34.712-63.776-73.185-116.168-79.04-124.008c67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509c-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473c9.268.19 111.92 1.513 217.706-30.146c6.064 11.868 11.857 23.915 17.174 35.949c-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756c29.74 77.283 42.039 142.053 45.189 160.638c-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033c66.38-10.626 124.7 6.768 131.947 9.055c-9.442 58.941-43.273 109.844-90.795 141.978z\\" fill=\\"currentColor\\"/>","width":512},"facebook-f":{"body":"<path d=\\"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z\\" fill=\\"currentColor\\"/>","width":320},"github-alt":{"body":"<path d=\\"M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1s10.9-55.1 36.7-55.1s36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95c-37.9 76.6-142.1 74.8-216.7 74.8c-75.8 0-186.2 2.7-225.6-74.8c-14.6-29-20.2-63.1-20.2-95c0-41.9 13.9-81.5 41.5-113.6c-5.2-15.8-7.7-32.4-7.7-48.8c0-21.5 4.9-32.3 14.6-51.8c45.3 0 74.3 9 108.8 36c29-6.9 58.8-10 88.7-10c27 0 54.2 2.9 80.4 9.2c34-26.7 63-35.2 107.8-35.2c9.8 19.5 14.6 30.3 14.6 51.8c0 16.4-2.6 32.7-7.7 48.2c27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6c-18.9 0-37 3.4-56 6c-14.9 2.3-29.8 3.2-45.1 3.2c-15.2 0-30.1-.9-45.1-3.2c-18.7-2.6-37-6-56-6c-46.8 0-73.5 38.7-73.5 82.6c0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1s36.7-34.2 36.7-55.1s-10.9-55.1-36.7-55.1z\\" fill=\\"currentColor\\"/>","width":480},"google-plus-g":{"body":"<path d=\\"M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599c-65.484 0-118.92 54.221-118.92 121.277c0 67.056 53.436 121.277 118.92 121.277c75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z\\" fill=\\"currentColor\\"/>","width":640},"instagram":{"body":"<path d=\\"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z\\" fill=\\"currentColor\\"/>"},"invision":{"body":"<path d=\\"M407.4 32H40.6C18.2 32 0 50.2 0 72.6v366.8C0 461.8 18.2 480 40.6 480h366.8c22.4 0 40.6-18.2 40.6-40.6V72.6c0-22.4-18.2-40.6-40.6-40.6zM176.1 145.6c.4 23.4-22.4 27.3-26.6 27.4c-14.9 0-27.1-12-27.1-27c.1-35.2 53.1-35.5 53.7-.4zM332.8 377c-65.6 0-34.1-74-25-106.6c14.1-46.4-45.2-59-59.9.7l-25.8 103.3H177l8.1-32.5c-31.5 51.8-94.6 44.4-94.6-4.3c.1-14.3.9-14 23-104.1H81.7l9.7-35.6h76.4c-33.6 133.7-32.6 126.9-32.9 138.2c0 20.9 40.9 13.5 57.4-23.2l19.8-79.4h-32.3l9.7-35.6h68.8l-8.9 40.5c40.5-75.5 127.9-47.8 101.8 38c-14.2 51.1-14.6 50.7-14.9 58.8c0 15.5 17.5 22.6 31.8-16.9L386 325c-10.5 36.7-29.4 52-53.2 52z\\" fill=\\"currentColor\\"/>"},"linkedin-in":{"body":"<path d=\\"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z\\" fill=\\"currentColor\\"/>"},"reddit-alien":{"body":"<path d=\\"M440.3 203.5c-15 0-28.2 6.2-37.9 15.9c-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2c22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8c-9.7-10.1-23.4-16.3-38.4-16.3c-55.6 0-73.8 74.6-22.9 100.1c-1.8 7.9-2.6 16.3-2.6 24.7c0 83.8 94.4 151.7 210.3 151.7c116.4 0 210.8-67.9 210.8-151.7c0-8.4-.9-17.2-3.1-25.1c49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7c21.6 0 39.2 17.6 39.2 39.7c0 21.6-17.6 39.2-39.2 39.2c-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0c-4-3.5-4-9.7 0-13.7c3.5-3.5 9.7-3.5 13.2 0c27.8 28.5 120 29 149 0c3.5-3.5 9.7-3.5 13.2 0c4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2c0-22 17.6-39.7 39.2-39.7c22 0 39.7 17.6 39.7 39.7c-.1 21.5-17.7 39.2-39.7 39.2z\\" fill=\\"currentColor\\"/>","width":512},"tumblr":{"body":"<path d=\\"M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7c-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16c62-21.8 81.5-76 84.3-117.1c.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8c4.8-1.9 9-3.2 12.7-2.2c3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z\\" fill=\\"currentColor\\"/>","width":320},"twitter":{"body":"<path d=\\"M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z\\" fill=\\"currentColor\\"/>","width":512},"youtube":{"body":"<path d=\\"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z\\" fill=\\"currentColor\\"/>","width":576}}},{"prefix":"ps","width":512,"height":512,"icons":{}}]');
collections.forEach((c) => Iconify.addCollection(c));
var nprogress = "";
var _default$1 = "";
var _default = "";
var simplebar = "";
var tinySlider = "";
var notyf_min = "";
var tippy = "";
var svgArrow = "";
var border = "";
var backdrop = "";
var light = "";
var sweetalert2_min = "";
var main = "";
const DARK_MODE_BODY_CLASS = "is-light";
const initDarkmode = () => {
  const darkmode = useDarkmode();
  watchEffect(() => {
    const body = document.documentElement;
    if (darkmode.isDark) {
      body.classList.add(DARK_MODE_BODY_CLASS);
    } else {
      body.classList.remove(DARK_MODE_BODY_CLASS);
    }
  });
};
const useDarkmode = defineStore("darkmode", () => {
  const preferredDark = usePreferredDark();
  const colorSchema = useStorage("color-schema", "auto");
  const isDark = computed({
    get() {
      return colorSchema.value === "auto" ? preferredDark.value : colorSchema.value === "dark";
    },
    set(v2) {
      if (v2 === preferredDark.value)
        colorSchema.value = "auto";
      else
        colorSchema.value = v2 ? "dark" : "light";
    }
  });
  const onChange = (event) => {
    const target = event.target;
    isDark.value = !target.checked;
  };
  return {
    isDark,
    onChange
  };
});
const useUserSession = defineStore("userSession", () => {
  const nToken = localStorage.getItem("token");
  const token = useStorage("token", nToken);
  const user = ref();
  const loading = ref(true);
  const isLoggedIn = computed(() => token.value !== void 0 && token.value !== "");
  function setUser(newUser) {
    user.value = newUser;
  }
  function setToken(newToken) {
    token.value = newToken;
  }
  function setLoading(newLoading) {
    loading.value = newLoading;
  }
  async function logoutUser() {
    token.value = void 0;
    user.value = void 0;
  }
  function hasClearence(clearenceCode) {
    var _a;
    const clearences = ((_a = user.value) == null ? void 0 : _a.clearence) || [];
    return clearences.includes(clearenceCode);
  }
  function hasPermissions(permissionsCode) {
    var _a;
    const permissions = ((_a = user.value) == null ? void 0 : _a.permissions) || [];
    return permissions.includes(permissionsCode);
  }
  return {
    user,
    token,
    isLoggedIn,
    loading,
    logoutUser,
    setUser,
    setToken,
    setLoading,
    hasClearence,
    hasPermissions
  };
});
let api;
function createApi() {
  api = axios.create({
    baseURL: "https://api-dot-creciendo-seguro-dev.uc.r.appspot.com/api/v1"
  });
  api.interceptors.request.use((config) => {
    const userSession = useUserSession();
    if (userSession.isLoggedIn) {
      config.headers = __spreadProps(__spreadValues({}, config.headers), {
        Authorization: `Bearer ${userSession.token}`
      });
    }
    return config;
  });
  return api;
}
function useApi() {
  if (!api) {
    createApi();
  }
  return api;
}
async function registerGlobalComponents({ app }) {
  const background = (await __vitePreload(() => import("./background.3a37c742.js"), true ? [] : void 0)).default;
  const tooltip = (await __vitePreload(() => import("./tooltip.0c343815.js"), true ? [] : void 0)).default;
  app.use(setup, {});
  app.use(plugin, {
    component: "Tippy",
    defaultProps: {
      theme: "light"
    }
  });
  app.component("Multiselect", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./multiselect.cc98e7e1.js"), true ? ["assets/multiselect.cc98e7e1.js","assets/vendor.6548d360.js"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
  app.component("Slider", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./slider.65022f1d.js"), true ? ["assets/slider.65022f1d.js","assets/vendor.6548d360.js"] : void 0).then((mod) => mod.default),
    delay: 0,
    suspensible: false
  }));
  app.component("VCalendar", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./vendor.6548d360.js").then(function(n2) {
      return n2.aN;
    }), true ? [] : void 0).then((mod) => mod.Calendar),
    delay: 0,
    suspensible: false
  }));
  app.component("VDatePicker", defineAsyncComponent({
    loader: () => __vitePreload(() => import("./vendor.6548d360.js").then(function(n2) {
      return n2.aN;
    }), true ? [] : void 0).then((mod) => mod.DatePicker),
    delay: 0,
    suspensible: false
  }));
  app.directive("background", background);
  app.directive("tooltip", tooltip);
}
async function createApp() {
  const head = createHead();
  const i18n = createI18n();
  const router = createRouter();
  const pinia = createPinia();
  const api2 = createApi();
  const app = createApp$1({
    setup() {
      initDarkmode();
      return () => {
        return h(Suspense, null, {
          default: () => h(VueroApp)
        });
      };
    }
  });
  const vuero = {
    app,
    api: api2,
    router,
    i18n,
    head,
    pinia
  };
  await registerGlobalComponents(vuero);
  app.use(vuero.pinia);
  app.use(vuero.head);
  app.use(vuero.i18n);
  app.use(index);
  app.component("downloadCsv", JsonCSV);
  app.use(VueSweetalert2);
  app.config.globalProperties.$filters = {
    formatCurrency(value) {
      return new Intl.NumberFormat("mx-MX").format(value);
    }
  };
  app.use(vuero.router);
  return vuero;
}
createApp().then(async (vuero) => {
  vuero.router.beforeEach(() => {
    nprogress$1.exports.start();
  });
  vuero.router.afterEach(() => {
    nprogress$1.exports.done();
  });
  await vuero.router.isReady();
  vuero.app.mount("#app");
});
export { CssUnitRe as C, _export_sfc as _, useUserSession as a, _sfc_main$2 as b, __vitePreload as c, _sfc_main$4 as d, _sfc_main$5 as e, __unplugin_components_7 as f, useApi as g, useDarkmode as u };
