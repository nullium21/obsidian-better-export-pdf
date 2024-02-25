import { Plugin } from 'obsidian';
import { PdfPreviewView } from './PdfPreviewView';

export default class PdfPlugin extends Plugin {

	async onload() {
        this.registerView(PdfPreviewView.VIEW_TYPE, leaf => new PdfPreviewView(leaf));
        this.addRibbonIcon("book-text", "PDF Export", () => this.showPreview());
	}

	onunload() {

	}

    async showPreview() {
        const { workspace } = this.app;
        const leaf = workspace.createLeafInTabGroup();

        await leaf.setViewState({ type: PdfPreviewView.VIEW_TYPE, active: true });
        workspace.revealLeaf(leaf);
    }
}
