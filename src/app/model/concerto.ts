export class Concerto {
    id: Number;
    nome_locale: String;
    data: String;
    ora: String;
    indirizzo_locale: String;
    foto_locale: String;

    public setId(id: Number) {
        this.id = id;
    }

    public getId(): Number {
        return this.id;
    }

    public setNomeLocale(nome_locale: String) {
        this.nome_locale = nome_locale;
    }

    public getNomeLocale(): String {
        return this.nome_locale;
    }

    public setData(data: String) {
        this.data = data;
    }

    public getData(): String {
        return this.data;
    }

    public setOra(ora: String) {
        this.ora = ora;
    }

    public getOra(): String {
        return this.ora;
    }

    public setIndirizzoLocale(indirizzo_locale: String) {
        this.indirizzo_locale = indirizzo_locale;
    }

    public getIndirizzoLocale(): String {
        return this.indirizzo_locale;
    }

    public setFotoLocale(foto_locale: String) {
        this.foto_locale = foto_locale;
    }

    public getFotoLocale(): String {
        return this.foto_locale;
    }
}

