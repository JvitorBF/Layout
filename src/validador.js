/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i) {
  const tel = i.value;
  /*verifica se não é número*/
  if (isNaN(tel[tel.length - 1])) {
    i.value = tel.substring(0, tel.length - 1);
    return;
  }

  i.setAttribute("maxlength", "16");

  /*inclui mascara do telefone*/
  if (tel.length == 1) {
    i.value = "(" + i.value;
  }
  if (tel.length == 3) {
    i.value = i.value + ") ";
  }
  if (tel.length == 6) {
    i.value = i.value + " ";
  }
  if (tel.length == 11) {
    i.value = i.value + "-";
  }
} //fim mascaraTel

function mascaraCPF(i) {
  const cpf = i.value;
  /*verifica se não é número*/
  if (isNaN(cpf[cpf.length - 1])) {
    i.value = cpf.substring(0, cpf.length - 1);
    return;
  }
  i.setAttribute("maxlength", "14");
  if (cpf.length == 3) {
    i.value = i.value + ".";
  }
  if (cpf.length == 7) {
    i.value = i.value + ".";
  }
  if (cpf.length == 11) {
    i.value = i.value + "-";
  }
}

function mascaraCNPJ(i) {
  const cnpj = i.value;
  /*verifica se não é número*/
  if (isNaN(cnpj[cnpj.length - 1])) {
    i.value = cnpj.substring(0, cnpj.length - 1);
    return;
  }
  i.setAttribute("maxlength", "18");
  if (cnpj.length == 2) {
    i.value = i.value + ".";
  }
  if (cnpj.length == 6) {
    i.value = i.value + ".";
  }
  if (cnpj.length == 10) {
    i.value = i.value + "/";
  }
  if (cnpj.length == 15) {
    i.value = i.value + "-";
  }
}

function validar() {
  var nome = formUser.nome.value;
  var email = formUser.email.value;
  var senha = formUser.senha.value;
  var senha_confirma = formUser.confSenha.value;
  var end = formUser.end.value;
  var cpf = formUser.cpf.value;
  var cnpj = formUser.cnpj.value;

  if (nome == "" || nome.length <= 3) {
    alert("Informe o nome completo!");
    formUser.nome.focus();
    return false;
  }

  if (email == "" || email.length <= 10) {
    alert("Informe o e-mail correto!");
    formUser.email.focus();
    return false;
  }

  if (senha.length <= 5) {
    alert("Informe uma senha com 6 caracteres ou mais!");
    formUser.senha.focus();
    return false;
  } else if (senha != senha_confirma) {
    alert("As senhas são diferentes!");
    formUser.confSenha.focus();
    return false;
  }

  if (end == "" || end.length <= 10) {
    alert("Informe o endereço!");
    formUser.end.focus();
    return false;
  }

  if (cpf == "" && cnpj == "") {
    alert("Selecione um documento");
    return false;
  }

  if (cpf != "" && cnpj == "") {
    if (cpf.length != 14) {
      alert("CPF inválido");
      formUser.cpf.focus();
      return false;
    }
  }

  if (cpf == "" && cnpj != "") {
    if (cnpj.length != 18) {
      alert("CNPJ inválido");
      formUser.cnpj.focus();
      return false;
    }
  }
}
